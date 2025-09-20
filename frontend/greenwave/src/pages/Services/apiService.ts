// src/services/apiService.ts

const API_BASE_URL = 'http://127.0.0.1:5000';

// Helper function for API requests
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // Get token from localStorage
  const token = localStorage.getItem('access_token');
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(url, {
    headers,
    ...options,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}



// Auth Services
export const authService = {
  async login(username: string, password: string) {
    return apiRequest<{ access_token: string; refresh_token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
  },

  async signup(fullname: string,username: string, email: string, password: string) {
    return apiRequest<{ 
      access_token: string; 
      refresh_token: string; 
      message: string 
    }>('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ fullname, username, email, password }),
    });
  },

  async getProfile() {
    return apiRequest<{ user_id: number }>('/auth/profile', {
      method: 'GET',
    });
  },
};


// Product Services (for your products routes)
export const productService = {
  async getAllProducts() {
    return apiRequest('/api/products');
  },

  async createProduct(productData: any) {
    return apiRequest('/api/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
  },

  async searchProducts(query: string) {
    return apiRequest(`/api/products/search?q=${encodeURIComponent(query)}`);
  },
};



// Upload Services (for your upload routes)
export const uploadService = {
  async uploadImage(imageFile: File) {
    const formData = new FormData();
    formData.append('image', imageFile);
    
    return apiRequest('/api/upload', {
      method: 'POST',
      headers: {
        // Don't set Content-Type for FormData, browser will set it automatically
      },
      body: formData,
    });
  },

  async getAIPrediction(imageData: any) {
    return apiRequest('/api/predict', {
      method: 'POST',
      body: JSON.stringify(imageData),
    });
  },
};



// Token management utilities
export const tokenService = {
  storeTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  },

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  },

  clearTokens(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  },



  // Optional: Add token refresh logic
  async refreshToken() {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) throw new Error('No refresh token available');
    
    return apiRequest<{ access_token: string }>('/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refresh_token: refreshToken }),
    });
  },
};



// Export everything
export default {
  authService,
  productService,
  uploadService,
  tokenService,
};
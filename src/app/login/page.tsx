"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Afrika çocukları
 // Evsizlik
];

export default function Login() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(["", "", "", "", "", "", "", ""]);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);

  const CORRECT_EMAIL = "tahavacid@gmail.com";
  const CORRECT_PASSWORD = "94113048";
  
  // Password input refs
  const passwordRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 500); // Her 500ms'de bir değişir (çok hızlı)

    return () => clearInterval(interval);
  }, []);

  // Yanlış şifre sonrası ilk kutucuğa focus için useEffect
  useEffect(() => {
    if (showPassword && !wrongPassword) {
      // Şifre kutucukları temizlendiğinde veya ilk kez görüntülendiğinde ilk kutucuğa focus yap
      if (password.every(p => p === "")) {
        setTimeout(() => {
          passwordRefs.current[0]?.focus();
        }, 150);
      }
    }
  }, [wrongPassword, password, showPassword]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError("Enter email address");
      return;
    }

    if (email.toLowerCase().trim() !== CORRECT_EMAIL.toLowerCase()) {
      setError("Wrong email address! Please enter the correct email address.");
      setShowPassword(false);
      return;
    }

    // Doğru e-posta girildi
    setError("");
    setShowPassword(true);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const enteredPassword = password.join("");
    
    if (enteredPassword.length !== 8) {
      setError("Enter 8-digit password");
      return;
    }

    if (enteredPassword !== CORRECT_PASSWORD) {
      setWrongPassword(true);
      setError("");
      
      // 2 saniye sonra şifre kutularını temizle ve tekrar denemeye hazırla
      setTimeout(() => {
        setPassword(["", "", "", "", "", "", "", ""]);
        setWrongPassword(false);
      }, 2000);
      return;
    }

    setIsLoading(true);
    setError("");
    setWrongPassword(false);
    
    // Başarılı giriş
    setTimeout(() => {
      setIsLoading(false);
      console.log("Login successful!");
      // Burada dashboard'a yönlendirme yapılacak
    }, 1000);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // E-posta değiştirilirken hata mesajını temizle
    if (error) {
      setError("");
    }
  };

  const handlePasswordChange = (index: number, value: string) => {
    // Sadece rakam girişine izin ver
    if (value && !/^\d$/.test(value)) return;

    const newPassword = [...password];
    newPassword[index] = value;
    setPassword(newPassword);

    // Hata mesajını temizle
    if (error) {
      setError("");
    }
    
    // Yanlış şifre durumunu temizle
    if (wrongPassword) {
      setWrongPassword(false);
    }

    // Otomatik sonraki kutucuğa geç
    if (value && index < 7) {
      passwordRefs.current[index + 1]?.focus();
    }
  };

  const handlePasswordKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Backspace ile önceki kutucuğa geç
    if (e.key === "Backspace" && !password[index] && index > 0) {
      passwordRefs.current[index - 1]?.focus();
    }
  };

  const handlePasswordPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 8);
    
    if (pastedData.length === 8) {
      const newPassword = pastedData.split("");
      setPassword(newPassword);
      passwordRefs.current[7]?.focus();
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      
      {/* Sol Yarı - Logo ve Değişen Arka Plan */}
      <div className="relative w-1/2 flex flex-col justify-center items-center overflow-hidden">
        {/* Arka Plan Görselleri */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`
            }}
          />
        ))}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Büyük Logo */}
        <div className="relative z-10 text-center">
          <Image
            src="/logo.png" 
            alt="Vacid & Köksal Foundation Logo"
            width={500}
            height={125}
            priority
            style={{ filter: 'brightness(0) invert(1)' }}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Sağ Yarı - Login Formu */}
      <div className="w-1/2 flex flex-col relative">
        
        {/* Login form content - Menu button kaldırıldı */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 md:px-16 lg:px-24">
          <div className="w-full max-w-md mx-auto">
            
            {/* Başlık */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-inter)]">
                Foundation System Login
              </h1>
              <p className="text-gray-600 text-lg">
                Access your account
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={showPassword ? handlePasswordSubmit : handleEmailSubmit} className="space-y-6">
              
              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  disabled={showPassword}
                  required
                  className={`w-full px-4 py-4 border rounded-xl text-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    showPassword 
                      ? 'border-green-200 bg-green-50 text-green-700' 
                      : error 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-blue-100'
                  }`}
                  placeholder="example@email.com"
                />
                {showPassword && (
                  <div className="mt-2 flex items-center text-sm text-green-600">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Email verified
                  </div>
                )}
              </div>

              {/* Password Input - 8 haneli sayısal kod */}
              {showPassword && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    8-Digit Security Code
                  </label>
                  <div className="flex space-x-3 justify-center">
                    {password.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => {
                          passwordRefs.current[index] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handlePasswordChange(index, e.target.value)}
                        onKeyDown={(e) => handlePasswordKeyDown(index, e)}
                        onPaste={index === 0 ? handlePasswordPaste : undefined}
                        disabled={wrongPassword}
                        className={`w-12 h-12 text-center text-xl font-bold border-2 rounded-lg bg-white text-gray-900 focus:outline-none transition-all duration-200 ${
                          wrongPassword 
                            ? 'border-red-300 bg-red-50' 
                            : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                        }`}
                        placeholder="•"
                      />
                    ))}
                  </div>
                  <div className="text-center mt-2 text-sm text-gray-500">
                    Enter 8-digit numeric code
                  </div>
                </div>
              )}

              {/* Error Message - Sadece e-posta hatası için */}
              {error && !showPassword && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm animate-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || wrongPassword}
                className={`w-full py-4 px-6 rounded-xl transition-all duration-200 text-lg font-semibold flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl ${
                  wrongPassword
                    ? 'bg-red-600 text-white cursor-not-allowed'
                    : isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : showPassword && password.join("").length === 8
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {wrongPassword ? (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>Wrong password! Try again</span>
                  </>
                ) : isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Logging in...</span>
                  </>
                ) : (
                  <>
                    <span>{showPassword ? 'Login' : 'Continue'}</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>

            </form>

            {/* Back Button - Şifre alanı görünürken */}
            {showPassword && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowPassword(false);
                    setPassword(["", "", "", "", "", "", "", ""]);
                    setError("");
                    setWrongPassword(false);
                  }}
                  className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Change email
                </button>
              </div>
            )}

            {/* Remember Me */}
            <div className="mt-8 mb-8">
              <label className="flex items-center text-base text-gray-600 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mr-3"
                />
                <span className="select-none">
                  Keep me logged in
                </span>
              </label>
            </div>

            {/* Forgot Password */}
            <div className="text-center">
              <button 
                onClick={() => setShowForgotModal(true)}
                className="text-blue-600 hover:text-blue-700 text-base font-medium transition-colors duration-200"
              >
                Forgot your password?
              </button>
            </div>

          </div>
        </div>

        {/* Footer - En aşağıda */}
        <div className="px-8 py-6 border-t border-gray-100 flex justify-center">
          <div className="w-full max-w-md">
            <div className="flex flex-col items-center space-y-3">
              <p className="text-sm text-gray-500">© 2025 Vacid & Köksal Foundation</p>
              <a 
                href="/" 
                className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                ← Return to homepage
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div 
          className="fixed inset-0 bg-white/30 flex items-center justify-center z-50 p-4"
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative transform transition-all">
            {/* Kapatma Butonu */}
            <button
              onClick={() => setShowForgotModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal İçeriği */}
            <div className="text-center">
              {/* İkon */}
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
                <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>

              {/* Başlık */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reset Password
              </h3>

              {/* Açıklama */}
              <p className="text-gray-600 mb-8 leading-relaxed">
                Contact the system administrator for password reset request. 
                For security reasons, passwords can only be reset by authorized personnel.
              </p>

              {/* İletişim Bilgileri */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-center text-sm text-gray-700">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    info@vacidkoksal.org
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-700">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +90 (212) 555 0123
                  </div>
                </div>
              </div>

              {/* Kapat Butonu */}
              <button
                onClick={() => setShowForgotModal(false)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
} 
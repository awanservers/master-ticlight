import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Users, Zap, Shield, ArrowRight, Check, Bug, Apple, Play, Star, Sparkles, Heart, Award } from 'lucide-react';

const MobileAppDevelopment = () => {
  const features = [
    'Pengembangan Native iOS & Android',
    'Solusi Cross-Platform (Flutter/React Native)',
    'Desain UI/UX Kustom',
    'Integrasi API & Backend Services',
    'Push Notifications & Analytics',
    'App Store Optimization',
    'Fungsionalitas Offline',
    'Keamanan & Perlindungan Data'
  ];

  const services = [
    {
      icon: Smartphone,
      title: 'Android App Development',
      description: 'Pengembangan aplikasi Android native menggunakan Kotlin/Java dengan performa optimal dan user experience yang luar biasa untuk semua perangkat Android.',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200 hover:border-green-300',
      features: ['Native Android Development', 'Material Design Guidelines', 'Google Play Store Ready', 'Performance Optimization']
    },
    {
      icon: Apple,
      title: 'iOS App Development',
      description: 'Aplikasi iOS native dengan Swift yang mengikuti design guidelines Apple untuk pengalaman pengguna yang seamless di iPhone dan iPad.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200 hover:border-blue-300',
      features: ['Native iOS Development', 'Human Interface Guidelines', 'App Store Ready', 'iOS Ecosystem Integration']
    },
    {
      icon: Bug,
      title: 'App Maintenance & Bug Fixing',
      description: 'Layanan pemeliharaan aplikasi berkelanjutan dan perbaikan bug untuk memastikan aplikasi berjalan lancar, stabil, dan selalu up-to-date.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200 hover:border-purple-300',
      features: ['Bug Fixing & Debugging', 'Performance Monitoring', 'Security Updates', '24/7 Support Available']
    }
  ];

  const platforms = [
    { 
      name: 'Google Play Store', 
      description: 'Publikasi aplikasi Android ke Google Play Store dengan optimasi listing dan metadata', 
      color: 'from-green-500 to-green-600',
      icon: Play
    },
    { 
      name: 'Apple App Store', 
      description: 'Publikasi aplikasi iOS ke Apple App Store dengan review guidelines compliance', 
      color: 'from-blue-500 to-blue-600',
      icon: Apple
    },
    { 
      name: 'Dual Platform Publishing', 
      description: 'Publikasi simultan ke kedua platform untuk jangkauan maksimal pengguna', 
      color: 'from-purple-500 to-purple-600',
      icon: Smartphone
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Strategi & Perencanaan',
      description: 'Kami menganalisis kebutuhan aplikasi, target audiens, dan positioning pasar untuk membuat strategi pengembangan yang komprehensif.'
    },
    {
      step: 2,
      title: 'Desain UI/UX',
      description: 'Desainer kami menciptakan interface yang intuitif dan engaging yang memberikan pengalaman pengguna luar biasa di semua perangkat.'
    },
    {
      step: 3,
      title: 'Pengembangan & Testing',
      description: 'Kami membangun aplikasi menggunakan best practices, menerapkan testing menyeluruh untuk memastikan kualitas dan performa.'
    },
    {
      step: 4,
      title: 'Peluncuran & Dukungan',
      description: 'Setelah deployment di app store, kami menyediakan maintenance berkelanjutan, update, dan optimasi performa.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <span className="text-green-600 font-medium">Pengembangan Aplikasi Mobile</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Aplikasi Mobile Native & Cross-Platform
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bangun aplikasi mobile yang powerful untuk melibatkan pengguna dan mendorong pertumbuhan bisnis. 
                Kami menciptakan aplikasi iOS, Android native, dan cross-platform dengan pengalaman pengguna yang luar biasa.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Mulai Proyek Aplikasi Anda
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                alt="Pengembangan Aplikasi Mobile"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-green-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-2 border border-green-200 mb-6">
              <Sparkles className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-green-700 font-medium">Layanan Pengembangan Mobile</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Solusi Aplikasi Mobile
              <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                End-to-End
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dari konsep hingga publikasi di app store, kami menyediakan layanan pengembangan aplikasi mobile 
              yang komprehensif untuk semua kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110`}></div>
                
                <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border ${service.borderColor} transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 h-full group-hover:border-opacity-60 shadow-sm hover:shadow-lg`}>
                  {/* Icon with enhanced styling */}
                  <div className="relative mb-8 flex justify-center">
                    <div className={`bg-gradient-to-r ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center">
                          <div className={`bg-gradient-to-r ${service.color} w-4 h-4 rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                            <Check className="h-2.5 w-2.5 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/contact"
                      className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm group-hover:shadow-xl`}
                    >
                      Konsultasi Gratis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA section */}
          <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm rounded-3xl p-12 border border-green-200 max-w-4xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Heart className="h-8 w-8 text-white fill-current" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Aplikasi Mobile yang Mengagumkan
                  </h3>
                  <p className="text-gray-600">
                    Wujudkan ide aplikasi Anda menjadi kenyataan dengan tim developer berpengalaman
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-full">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600 text-sm">Aplikasi Dikembangkan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600 text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">5★</div>
                  <div className="text-gray-600 text-sm">Average Rating</div>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-green-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <Sparkles className="mr-3 h-5 w-5 group-hover:animate-spin" />
                Mulai Proyek Aplikasi Impian Anda
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Publishing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 border border-blue-200 mb-6">
              <Award className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium">Publikasi Aplikasi</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Publikasi ke App Store & Play Store
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami membantu Anda mempublikasikan aplikasi ke platform yang tepat sesuai kebutuhan dan target market Anda. 
              Dari Google Play Store, Apple App Store, atau keduanya untuk jangkauan maksimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-gray-300 text-center shadow-sm hover:shadow-md group"
              >
                <div className={`bg-gradient-to-r ${platform.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <platform.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {platform.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>

          {/* Publishing Benefits */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Keuntungan Publikasi dengan Fasapro
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kami menangani seluruh proses publikasi aplikasi Anda dengan profesional dan sesuai guidelines platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'App Store Optimization', description: 'Optimasi listing untuk visibilitas maksimal' },
                { title: 'Guidelines Compliance', description: 'Memastikan aplikasi sesuai aturan platform' },
                { title: 'Metadata Optimization', description: 'Deskripsi dan keyword yang menarik' },
                { title: 'Review Management', description: 'Bantuan mengatasi review process' }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Star className="h-6 w-6 text-white fill-current" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Aplikasi Mobile?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aplikasi mobile memberikan keunggulan unik untuk melibatkan pelanggan dan mengembangkan bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Engagement Lebih Baik', description: 'Komunikasi langsung dengan pengguna melalui push notifications' },
              { icon: Zap, title: 'Performa Superior', description: 'Loading time lebih cepat dan pengalaman pengguna yang lebih smooth' },
              { icon: Shield, title: 'Keamanan Enhanced', description: 'Fitur keamanan built-in dan perlindungan data' },
              { icon: Smartphone, title: 'Akses Offline', description: 'Fungsionalitas inti tersedia tanpa koneksi internet' }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-colors duration-300 border border-gray-200 shadow-sm hover:shadow-md"
              >
                <div className="bg-gradient-to-r from-green-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proses Pengembangan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dari konsep hingga app store, kami memandu Anda melalui setiap langkah pengembangan aplikasi mobile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Fitur Aplikasi Komprehensif
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Setiap aplikasi mobile yang kami kembangkan mencakup fitur-fitur essential yang memastikan 
                pengalaman pengguna yang excellent, performa, dan kesuksesan bisnis.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-green-500 w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
                alt="Fitur aplikasi mobile"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap Membangun Aplikasi Mobile Impian Anda?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Mari ciptakan aplikasi mobile yang melibatkan pengguna dan mendorong pertumbuhan bisnis. 
            Hubungi kami hari ini untuk mendiskusikan ide aplikasi Anda dan dapatkan konsultasi gratis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Konsultasi Gratis Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Lihat Portfolio Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
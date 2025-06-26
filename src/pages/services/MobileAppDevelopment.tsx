import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Users, Zap, Shield, ArrowRight, Check, Bug, Apple, Play, Star, Sparkles, Heart, Award, Code2, Layers } from 'lucide-react';

const MobileAppDevelopment = () => {
  const features = [
    'Cross-Platform Development (Flutter/React Native)',
    'Native Performance & User Experience',
    'Real-time Data Synchronization',
    'Push Notifications & Analytics',
    'Offline Functionality',
    'Social Media Integration',
    'Payment Gateway Integration',
    'App Store Optimization (ASO)'
  ];

  const services = [
    {
      icon: Smartphone,
      title: 'Android App Development',
      description: 'Pengembangan aplikasi Android native dan cross-platform yang optimal untuk startup dengan budget efisien dan time-to-market yang cepat.',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200 hover:border-green-300',
      features: ['Material Design 3.0', 'Kotlin & Java Support', 'Google Play Console Ready', 'Firebase Integration']
    },
    {
      icon: Apple,
      title: 'iOS App Development',
      description: 'Aplikasi iOS yang mengikuti Human Interface Guidelines dengan performa tinggi untuk menjangkau pengguna premium di ekosistem Apple.',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-100',
      borderColor: 'border-green-200 hover:border-emerald-300',
      features: ['SwiftUI & UIKit', 'iOS 15+ Support', 'App Store Connect Ready', 'TestFlight Integration']
    },
    {
      icon: Bug,
      title: 'App Maintenance & Support',
      description: 'Layanan maintenance berkelanjutan untuk memastikan aplikasi startup Anda selalu update, aman, dan berkinerja optimal seiring pertumbuhan bisnis.',
      color: 'from-emerald-500 to-green-600',
      bgColor: 'from-emerald-50 to-green-100',
      borderColor: 'border-emerald-200 hover:border-green-300',
      features: ['24/7 Monitoring', 'Bug Fixing & Updates', 'Performance Optimization', 'Security Patches']
    }
  ];

  const technologies = [
    {
      name: 'Flutter',
      description: 'Cross-platform framework Google untuk development cepat',
      icon: Layers,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      name: 'React Native',
      description: 'Framework Facebook untuk aplikasi native dengan JavaScript',
      icon: Code2,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'from-emerald-50 to-green-50'
    }
  ];

  const platforms = [
    { 
      name: 'Google Play Store', 
      description: 'Publikasi aplikasi Android dengan optimasi listing dan metadata untuk visibilitas maksimal', 
      color: 'from-green-500 to-green-600',
      icon: Play,
      features: ['Play Console Setup', 'ASO Optimization', 'Release Management', 'Analytics Integration']
    },
    { 
      name: 'Apple App Store', 
      description: 'Publikasi aplikasi iOS dengan compliance review guidelines dan optimasi App Store Connect', 
      color: 'from-green-600 to-emerald-600',
      icon: Apple,
      features: ['App Store Connect', 'Review Guidelines', 'TestFlight Beta', 'App Store Optimization']
    },
    { 
      name: 'Dual Platform Launch', 
      description: 'Strategi peluncuran simultan ke kedua platform untuk jangkauan maksimal dan market penetration', 
      color: 'from-emerald-500 to-green-600',
      icon: Smartphone,
      features: ['Synchronized Launch', 'Cross-Platform Analytics', 'Unified Marketing', 'Multi-Store Management']
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Strategy',
      description: 'Kami menganalisis target market startup Anda, kompetitor, dan user journey untuk membuat strategi pengembangan yang tepat sasaran.'
    },
    {
      step: 2,
      title: 'MVP Development',
      description: 'Fokus pada fitur core untuk Minimum Viable Product yang dapat diluncurkan cepat ke market untuk validasi dan feedback.'
    },
    {
      step: 3,
      title: 'Iterative Development',
      description: 'Pengembangan agile dengan sprint pendek, testing berkelanjutan, dan iterasi berdasarkan user feedback dan data analytics.'
    },
    {
      step: 4,
      title: 'Launch & Scale',
      description: 'Peluncuran ke app store dengan strategi marketing, monitoring performa, dan scaling fitur berdasarkan traction.'
    }
  ];

  const startupBenefits = [
    {
      icon: Zap,
      title: 'Fast Time-to-Market',
      description: 'Pengembangan cepat dengan framework modern untuk launch produk lebih awal'
    },
    {
      icon: Users,
      title: 'Cost-Effective Solution',
      description: 'Solusi hemat biaya dengan cross-platform development untuk startup budget'
    },
    {
      icon: Shield,
      title: 'Scalable Architecture',
      description: 'Arsitektur yang dapat berkembang seiring pertumbuhan user dan fitur'
    },
    {
      icon: Star,
      title: 'User-Centric Design',
      description: 'Fokus pada user experience untuk meningkatkan retention dan engagement'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <span className="text-green-600 font-medium">Mobile App Development</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Aplikasi Mobile untuk
                <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Web Startup
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bangun aplikasi mobile yang powerful untuk startup Anda dengan teknologi modern. 
                Kami membantu mewujudkan ide menjadi aplikasi yang dapat bersaing di market dengan development cepat dan cost-effective.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Mulai Proyek Startup Anda
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                alt="Mobile App Development for Startups"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Layanan Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-green-100/30 to-emerald-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-emerald-100/30 to-green-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-2 border border-green-200 mb-6">
              <Sparkles className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-green-700 font-medium">Layanan Pengembangan Mobile</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Solusi Mobile App untuk
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Startup Modern
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dari konsep hingga peluncuran di app store, kami menyediakan layanan pengembangan aplikasi mobile 
              yang dirancang khusus untuk kebutuhan dan budget startup.
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
                <div className={`absolute inset-0 bg-gradient-to-r ${service.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110`}></div>
                
                <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border ${service.borderColor} transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 h-full shadow-sm hover:shadow-lg`}>
                  <div className="relative mb-8 flex justify-center">
                    <div className={`bg-gradient-to-r ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>

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

                    <Link
                      to="/contact"
                      className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm`}
                    >
                      Konsultasi Gratis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm rounded-3xl p-12 border border-green-200 max-w-4xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Heart className="h-8 w-8 text-white fill-current" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Ready to Launch Your Startup App?
                  </h3>
                  <p className="text-gray-600">
                    Wujudkan ide startup Anda menjadi aplikasi mobile yang sukses
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-full">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">2-4</div>
                  <div className="text-gray-600 text-sm">Bulan Development</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">50%</div>
                  <div className="text-gray-600 text-sm">Lebih Hemat Biaya</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                  <div className="text-gray-600 text-sm">Startup Focused</div>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <Sparkles className="mr-3 h-5 w-5 group-hover:animate-spin" />
                Mulai Proyek Startup Anda
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Teknologi Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-2 border border-green-200 mb-6">
              <Code2 className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-green-700 font-medium">Teknologi Modern</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Teknologi yang Kami Gunakan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menggunakan framework terdepan untuk pengembangan aplikasi mobile yang efisien dan berkualitas tinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${tech.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-green-200 hover:border-green-300 text-center group`}
              >
                <div className={`bg-gradient-to-r ${tech.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <tech.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Mengapa Cross-Platform untuk Startup?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <div className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-gray-900">Hemat Biaya Development</span>
                  </div>
                  <p className="text-gray-600 text-sm">Satu codebase untuk dua platform</p>
                </div>
                <div className="text-left">
                  <div className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-gray-900">Faster Time-to-Market</span>
                  </div>
                  <p className="text-gray-600 text-sm">Launch lebih cepat ke kedua platform</p>
                </div>
                <div className="text-left">
                  <div className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-gray-900">Maintenance Efisien</span>
                  </div>
                  <p className="text-gray-600 text-sm">Update dan bug fix lebih mudah</p>
                </div>
                <div className="text-left">
                  <div className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium text-gray-900">Native Performance</span>
                  </div>
                  <p className="text-gray-600 text-sm">Performa mendekati aplikasi native</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Publikasi Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-2 border border-green-200 mb-6">
              <Award className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-green-700 font-medium">Platform Publikasi</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kami Siap Membantu Publikasi Aplikasi Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dari Google Play Store, Apple App Store, atau keduanya - kami membantu startup Anda 
              mencapai audiens yang tepat dengan strategi publikasi yang optimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-green-300 text-center shadow-sm hover:shadow-md group"
              >
                <div className={`bg-gradient-to-r ${platform.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <platform.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {platform.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {platform.description}
                </p>
                
                <div className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center">
                      <div className="bg-green-500 w-3 h-3 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <Check className="h-2 w-2 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Publishing Benefits */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Keuntungan Publikasi dengan Fasapro
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kami menangani seluruh proses publikasi aplikasi startup Anda dengan profesional dan sesuai guidelines platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'App Store Optimization', description: 'Optimasi listing untuk visibilitas maksimal di pencarian' },
                { title: 'Guidelines Compliance', description: 'Memastikan aplikasi sesuai aturan dan kebijakan platform' },
                { title: 'Launch Strategy', description: 'Strategi peluncuran yang tepat untuk startup' },
                { title: 'Post-Launch Support', description: 'Dukungan setelah launch untuk update dan maintenance' }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg">
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

      {/* Startup Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Startup Membutuhkan Aplikasi Mobile?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aplikasi mobile memberikan keunggulan kompetitif untuk startup dalam menjangkau dan melibatkan pengguna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {startupBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300 border border-gray-200 shadow-sm hover:shadow-md text-center"
              >
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto shadow-lg">
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proses Development untuk Startup
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Metodologi agile yang disesuaikan dengan kebutuhan startup untuk development yang cepat dan efisien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
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

      {/* Fitur Aplikasi Komprehensif Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Fitur Aplikasi Komprehensif untuk Startup
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Setiap aplikasi mobile yang kami kembangkan untuk startup mencakup fitur-fitur essential 
                yang memastikan user engagement, scalability, dan kesuksesan bisnis jangka panjang.
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
                alt="Fitur aplikasi mobile untuk startup"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap Meluncurkan Aplikasi Startup Anda?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Mari wujudkan ide startup Anda menjadi aplikasi mobile yang sukses. 
            Hubungi kami hari ini untuk konsultasi gratis dan dapatkan strategi development yang tepat!
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
              Lihat Portfolio Startup
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
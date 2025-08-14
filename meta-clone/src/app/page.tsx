import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, ShoppingBag, User, Menu, Pause } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Menu className="md:hidden" />
            <div className="flex items-center space-x-2">
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                <path d="M0 24V0h7.5v9.75h9V0h7.5v24h-7.5v-9.75h-9V24H0z" fill="#1877F2"/>
                <path d="M30.5 12c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12zm7.5 0c0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5-4.5 2.015-4.5 4.5z" fill="#1877F2"/>
              </svg>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-gray-300">AI glasses</a>
              <a href="#" className="hover:text-gray-300">Meta Quest</a>
              <a href="#" className="hover:text-gray-300">Apps and games</a>
              <a href="#" className="hover:text-gray-300">Explore Meta</a>
              <a href="#" className="hover:text-gray-300">Support</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <User className="w-5 h-5 cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-black text-white min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/2685098663/991962771.webp"
            alt="Oakley Meta Glasses"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-light mb-4">
            <span className="block">Oakley design,</span>
            <span className="block">Meta technology</span>
          </h1>
          <p className="text-lg mb-8 max-w-lg mx-auto">
            Fifty years of design meets the new era of tech with Oakley Meta HSTN Limited Edition.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
            Learn more
          </Button>
        </div>
        <div className="absolute bottom-4 right-4">
          <button className="bg-black/50 rounded-full p-3 hover:bg-black/70">
            <Pause className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12 text-gray-800">
            Shop devices, accessories and more from the Meta Store
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI glasses",
                image: "https://ext.same-assets.com/2685098663/3975787056.webp",
                cta: "Shop now"
              },
              {
                title: "Meta Quest",
                image: "https://ext.same-assets.com/2685098663/3238320078.webp",
                cta: "Shop now"
              },
              {
                title: "Quest accessories",
                image: "https://ext.same-assets.com/2685098663/2272194607.webp",
                cta: "Shop now"
              },
              {
                title: "Quest apps and games",
                image: "https://ext.same-assets.com/2685098663/1369714739.webp",
                cta: "Shop now"
              }
            ].map((product, index) => (
              <Card key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-medium mb-4 text-gray-800">{product.title}</h3>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    {product.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ray-Ban Meta Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 text-white relative overflow-hidden min-h-[400px] flex items-center">
              <div className="relative z-10">
                <p className="text-sm mb-2 opacity-80">Ray-Ban Meta</p>
                <h3 className="text-4xl font-light mb-4">Find your perfect match</h3>
                <p className="mb-6 opacity-90">See how you look in 20+ styles and colors.</p>
                <div className="space-y-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 mr-3">
                    <span className="mr-2">👓</span> Try on virtually
                  </Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Shop all
                  </Button>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
                <img src="https://ext.same-assets.com/2685098663/2185564568.webp" alt="Glasses" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-600 rounded-3xl p-8 text-white relative overflow-hidden min-h-[400px] flex items-center">
              <div className="relative z-10">
                <p className="text-sm mb-2 opacity-80">Ray-Ban Meta</p>
                <h3 className="text-4xl font-light mb-4">Shop Transitions® lenses for all-day wear</h3>
                <p className="mb-6 opacity-90">Feel confident indoors and out with lenses that seamlessly adapt to changing light conditions.</p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Shop Transitions
                </Button>
              </div>
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-40">
                <img src="https://ext.same-assets.com/2685098663/2258433605.webp" alt="Woman with glasses" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Quest 3S Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-900 to-amber-700 rounded-3xl p-8 lg:p-16 text-white text-center relative overflow-hidden min-h-[500px] flex items-center justify-center">
            <div className="relative z-10 max-w-3xl">
              <p className="text-sm mb-4 opacity-80">Meta Quest</p>
              <h2 className="text-5xl lg:text-6xl font-light mb-6">Meta Quest 3S brings the magic of mixed reality</h2>
              <p className="text-lg mb-8 opacity-90">Get three months of Meta Horizon+ when you buy a Quest 3S.</p>
              <div className="space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                  Buy Meta Quest 3S
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black px-8 py-3">
                  Learn more
                </Button>
              </div>
            </div>
            <div className="absolute inset-0 opacity-20">
              <img src="https://ext.same-assets.com/2685098663/447109724.webp" alt="Meta Quest" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-900 to-orange-700 rounded-3xl p-8 text-white relative overflow-hidden min-h-[400px] flex items-center">
              <div className="relative z-10">
                <p className="text-sm mb-2 opacity-80">Quest accessories</p>
                <h3 className="text-4xl font-light mb-4">Elevate your experience</h3>
                <p className="mb-6 opacity-90">Complete your Meta Quest with straps, cases, cables and more.</p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Shop now
                </Button>
              </div>
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
                <img src="https://ext.same-assets.com/2685098663/1376827263.webp" alt="Quest accessories" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-900 to-yellow-700 rounded-3xl p-8 text-white relative overflow-hidden min-h-[400px] flex items-center">
              <div className="relative z-10">
                <p className="text-sm mb-2 opacity-80">Meta Quest</p>
                <h3 className="text-4xl font-light mb-4">Become Batman</h3>
                <p className="mb-6 opacity-90">Batman: Arkham Shadow is included with the purchase of Meta Quest 3S only.</p>
                <div className="space-y-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 mr-3">
                    Shop Meta Quest
                  </Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy From Meta */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16 text-gray-800">Why buy from Meta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🚚",
                title: "Free 2-day delivery",
                description: "Jump into the excitement faster, with free 2-day shipping on Meta Quest and Ray-Ban Meta."
              },
              {
                icon: "💰",
                title: "Free 30-day returns",
                description: "Change your mind? Return your product within 30 days with no shipping fees attached."
              },
              {
                icon: "🛡️",
                title: "Worry-free warranty",
                description: "Products that come with peace of mind. One-year warranty included."
              },
              {
                icon: "💳",
                title: "Play now, pay later",
                description: "When you finance with Affirm, you can dive into the action for as low as $19.99 USD/month."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-medium mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest from Meta */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12 text-gray-800">The latest from Meta</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="https://ext.same-assets.com/2685098663/421622759.webp"
                  alt="sEMG Research"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">New sEMG Research Published in 'Nature'</h3>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="https://ext.same-assets.com/2685098663/956059368.png"
                  alt="Oakley Meta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Introducing Oakley Meta Performance AI glasses</h3>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-medium mb-2 text-gray-800">Get news and updates from Meta</h2>
            <div className="flex gap-3 mb-4">
              <Input
                placeholder="Email"
                className="flex-1"
                type="email"
              />
              <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-8">
                Sign up
              </Button>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              By signing up you agree to receive updates and marketing messages (e.g. email, social, etc.) from Meta about Meta's existing and future products and services.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              You may withdraw your consent and unsubscribe at any time by clicking the unsubscribe link included in our messages.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Your subscription is subject to the <a href="#" className="text-blue-600 underline">Terms</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <svg width="80" height="32" viewBox="0 0 80 32" fill="none">
              <path d="M0 32V0h10v13h12V0h10v32H22V18H10v14H0z" fill="#1877F2"/>
              <path d="M40.67 16c0-8.837 7.164-16 16-16s16 7.163 16 16-7.164 16-16 16-16-7.163-16-16zm10 0c0 3.314 2.686 6 6 6s6-2.686 6-6-2.686-6-6-6-6 2.686-6 6z" fill="#1877F2"/>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-medium mb-4 text-gray-800">Meta Store</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Ray-Ban Meta glasses</a></li>
                <li><a href="#" className="hover:text-gray-800">Meta Quest</a></li>
                <li><a href="#" className="hover:text-gray-800">Accessories</a></li>
                <li><a href="#" className="hover:text-gray-800">Apps and games</a></li>
                <li><a href="#" className="hover:text-gray-800">Meta Quest gift cards</a></li>
                <li><a href="#" className="hover:text-gray-800">Refurbished Meta Quest 3</a></li>
                <li><a href="#" className="hover:text-gray-800">Meta for Work</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-gray-800">Our actions</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Data and privacy</a></li>
                <li><a href="#" className="hover:text-gray-800">Responsible business practices</a></li>
                <li><a href="#" className="hover:text-gray-800">Elections</a></li>
              </ul>

              <h4 className="font-medium mb-4 mt-8 text-gray-800">About us</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-800">About Meta</a></li>
                <li><a href="#" className="hover:text-gray-800">Careers</a></li>
                <li><a href="#" className="hover:text-gray-800">Media gallery</a></li>
                <li><a href="#" className="hover:text-gray-800">Brand resources</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-gray-800">Store support and legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Meta Help Center</a></li>
                <li><a href="#" className="hover:text-gray-800">Order status</a></li>
                <li><a href="#" className="hover:text-gray-800">Returns</a></li>
                <li><a href="#" className="hover:text-gray-800">Find a product demo</a></li>
                <li><a href="#" className="hover:text-gray-800">Legal</a></li>
                <li><a href="#" className="hover:text-gray-800">Terms of sale</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-gray-800">Community</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Creators</a></li>
                <li><a href="#" className="hover:text-gray-800">Developers</a></li>
                <li><a href="#" className="hover:text-gray-800">Businesses</a></li>
                <li><a href="#" className="hover:text-gray-800">Non-profits</a></li>
                <li><a href="#" className="hover:text-gray-800">Download SDKs</a></li>
              </ul>

              <h4 className="font-medium mb-4 mt-8 text-gray-800">App support</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Facebook Help Center</a></li>
                <li><a href="#" className="hover:text-gray-800">Instagram Help Center</a></li>
                <li><a href="#" className="hover:text-gray-800">WhatsApp Help Center</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">📘</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">📱</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">📷</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">✖️</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">📺</a>
            </div>
            <p className="text-sm text-gray-600">©2025 Meta.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

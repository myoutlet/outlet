import Image from "next/image"
import { Mail, Instagram, Twitter, Facebook, QrCode, FileSpreadsheet, ShoppingCart, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Header */}
      <header className="container mx-auto pt-6 px-4">
        <div className="flex justify-between items-center">
          <div className="w-48 md:w-64">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/no-background-myoutlet-uXEhGcnG15sJN0iCoQBjod1MpclLZo.png"
              alt="MyOutlet Logo"
              width={300}
              height={100}
              priority
            />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-800 hover:text-red-600 transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-800 hover:text-red-600 transition-colors font-medium">
              How It Works
            </a>
            <a href="#contact" className="text-gray-800 hover:text-red-600 transition-colors font-medium">
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              QR-Based Food Ordering
              <span className="block text-red-600">Coming Soon</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-md">
              Scan, order, enjoy. MyOutlet.app is transforming the way you experience dining with our innovative
              QR-based food ordering platform.
            </p>

            <div className="pt-4">
              <h3 className="text-xl mb-3 font-semibold">Be the first to know when we launch</h3>
              <div className="flex gap-2 max-w-md">
                <Input type="email" placeholder="Enter your email" className="border-gray-300" />
                <Button className="bg-red-600 hover:bg-red-700 text-white">Notify Me</Button>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-lg p-6 border border-gray-200 flex items-center justify-center shadow-lg">
              <QrCode className="w-32 h-32 md:w-40 md:h-40 text-red-600" />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg font-medium shadow-md">
                Scan to Order
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose MyOutlet?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                <QrCode className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Scan & Order</h3>
              <p className="text-gray-700">
                Simply scan the QR code at your table to browse the menu and place your order instantly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                <ShoppingCart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contactless Experience</h3>
              <p className="text-gray-700">Enjoy a fully contactless dining experience from ordering to payment.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                <FileSpreadsheet className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Google Sheets Integration</h3>
              <p className="text-gray-700">
                Manage your menu and track orders easily with our Google Sheets integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Sheets Integration Section */}
      <section id="how-it-works" className="py-16 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powered by Google Sheets</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Manage your restaurant menu and orders with the simplicity of Google Sheets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center">
                  <FileSpreadsheet className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium">MyOutlet Menu Management</span>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="grid grid-cols-4 gap-2 text-sm font-medium text-gray-700 border-b border-gray-200 pb-2">
                      <div>Item Name</div>
                      <div>Category</div>
                      <div>Price</div>
                      <div>Available</div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-sm border-b border-gray-100 pb-2">
                      <div>Margherita Pizza</div>
                      <div>Pizza</div>
                      <div>$12.99</div>
                      <div>Yes</div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-sm border-b border-gray-100 pb-2">
                      <div>Chicken Burger</div>
                      <div>Burgers</div>
                      <div>$9.99</div>
                      <div>Yes</div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-sm border-b border-gray-100 pb-2">
                      <div>Caesar Salad</div>
                      <div>Salads</div>
                      <div>$7.99</div>
                      <div>Yes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-2xl font-bold">Easy Menu Management</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-yellow-400 p-2 rounded-full mr-4 mt-1">
                    <span className="font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Create Your Menu in Google Sheets</h4>
                    <p className="text-gray-700">
                      Add your menu items, categories, prices, and images in a simple spreadsheet format.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400 p-2 rounded-full mr-4 mt-1">
                    <span className="font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Instant Updates</h4>
                    <p className="text-gray-700">
                      Change prices, add new items, or mark items as unavailable - all changes reflect instantly on your
                      digital menu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400 p-2 rounded-full mr-4 mt-1">
                    <span className="font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Track Orders Automatically</h4>
                    <p className="text-gray-700">
                      All customer orders are automatically logged in your Google Sheet for easy tracking and
                      management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">More Powerful Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                <Settings className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">No Coding Required</h3>
              <p className="text-gray-700 text-sm">
                Set up your digital menu and ordering system without any technical knowledge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Order History</h3>
              <p className="text-gray-700 text-sm">
                All orders are saved in your Google Sheet for easy reference and analysis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-700 text-sm">
                Accept payments online with our secure payment integration options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-4">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Analytics</h3>
              <p className="text-gray-700 text-sm">
                Get insights into your most popular items and busiest times with built-in analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Restaurant?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the waitlist today and be among the first to experience MyOutlet.app
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">Join Waitlist</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-48 mb-4 bg-white p-2 rounded">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/no-background-myoutlet-uXEhGcnG15sJN0iCoQBjod1MpclLZo.png"
                  alt="MyOutlet Logo"
                  width={200}
                  height={70}
                />
              </div>
              <p className="text-gray-400 max-w-xs">
                MyOutlet.app is revolutionizing the restaurant industry with QR-based ordering and Google Sheets
                integration.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-2" />
                  <a href="mailto:info@myoutlet.app" className="hover:text-white transition-colors">
                    info@myoutlet.app
                  </a>
                </p>
                <p className="flex items-center text-gray-400">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>Coming Soon</span>
                </p>
              </div>

              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} MyOutlet.app - All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent */}
      <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-sm border border-gray-200">
        <p className="text-sm text-gray-700 mb-3">
          This website uses cookies to analyze website traffic and optimize your website experience.
        </p>
        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">ACCEPT</Button>
      </div>
    </div>
  )
}


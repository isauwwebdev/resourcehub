"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "../components/breadcrumb";
import blogHeader from "../../../public/data/blogHeader.json";

const posts = [
{
    id: 1,
    title: "Coolest Neighborhoods in Seattle According to a Local",
    href: "https://www.emeraldpalate.com/coolest-neighborhoods-in-seattle/",
    description:
      "Explore Seattle's vibrant neighborhoods, from the artistic vibes of Capitol Hill to the historic charm of Ballard.",
    imageUrl:
      "https://www.emeraldpalate.com/wp-content/uploads/2023/04/Coolest-Neighborhoods-in-Seattle-Cal-Anderson-Park.jpeg",
    date: "May 15, 2025",
    datetime: "2025-05-15",
  },
  {
    id: 2,
    title: "The Best Coffee Shops in Seattle",
    href: "https://seattle.eater.com/maps/seattles-best-coffee-shops",
    description:
      "Discover Seattle's top coffee spots, from the iconic Espresso Vivace to the unique Ghost Note Coffee.",
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/bGvkQ1cFM7Nhup5C_Uorld9onMk=/0x0:2599x2598/1970x1478/filters:focal(953x1164:1367x1578):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/73672808/Cafe_Allegro_interior.0.jpeg",
    date: "May 10, 2025",
    datetime: "2025-05-10",
  },
];

export default function Page() {
  const titleName = usePathname().split("/").at(-1);
  const headerData = blogHeader[titleName] || {};

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="py-10 px-6 md:px-12 lg:px-32 xl:px-48">
        <Breadcrumb />

        <div className="mt-8 mb-12 p-8 shadow-2xl rounded-2xl relative overflow-hidden h-80">
          <img
            src="/blogheader/6.png"
            alt="Lifestyle Guide Header"
            className="w-full h-full object-cover absolute inset-0 rounded-2xl"
          />
        </div>


        <div className="flex flex-col lg:flex-row gap-12">
          {/* Blog Post Style Main Content */}
          <main className="flex-1">
            <article className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Article Header Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src="https://images.unsplash.com/photo-1627103092950-a6a759e954ad?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Seattle Lifestyle Image"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-90">
                    Published on November 20, 2024
                  </p>
                  <h2 className="text-2xl font-bold mt-1">
                    Your Lifestyle Guide to Campus Life
                  </h2>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12 prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                  Starting university in Seattle means stepping into a city full of opportunities but with its own unique vibe. Here’s how to settle in and make the most of your college experience.
                </p>

                <h2
                  id="cultural_adjustment"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-blue-500 pl-4"
                >
                  Cultural Adjustment
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Seattle’s outdoorsy vibe invites you to explore—whether you’re hiking, biking, or just relaxing in one of the many parks. And don’t worry if it rains—it’s all part of the experience! The city’s coffee culture is thriving, making cafés the perfect spot for study sessions or casual hangouts. Locals might seem a bit reserved at first, but don’t let that stop you. Keep at it, and soon enough, you’ll find your people. And hey, when in doubt, talk about the rain—it’s a great icebreaker!
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-r-lg">
                  <h4 className="font-semibold text-green-900 mb-2">
                    💡 Tips on Adjusting
                  </h4>
                  <div className="text-green-800">
                    <ul className="list-disc list-inside mb-2 space-y-1">
                      <li>Join clubs or volunteer groups to expand your social circle.</li>
                      <li>Get outside with classmates to relieve stress.</li>
                      <li>Embrace sustainable habits encouraged on campus.</li>
                      <li>Be patient; friendships grow over time.</li>
                    </ul>
                  </div>
                </div>

                <h2
                  id="shopping_options"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-purple-500 pl-4"
                >
                  Shopping Options
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Seattle offers a rich shopping landscape that caters to all tastes—from artisanal markets to large malls and outlet centers.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">  
                  Pike Place Market is a historic spot for fresh produce, seafood, and crafts. The University District and Capitol Hill are great for vintage finds and eco-friendly fashion. For mall lovers, Alderwood Mall has popular retailers, while Seattle Premium Outlets offer discounted luxury brands just outside the city.
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-300">
                    <h4 className="font-semibold text-indigo-900 mb-2">
                      🎫 Shopping Destinations
                    </h4>
                    <ul className="text-indigo-800 space-y-1 text-sm">
                      <li>• Pike Place Market: Best for local food, crafts, and fresh flowers.</li>
                      <li>• University District & Capitol Hill: Great for unique boutiques, thrift stores, and eco-friendly products.</li>
                      <li>• Alderwood Mall: Large indoor mall with diverse shops and dining options.</li>
                      <li>• Seattle Premium Outlets: Designer brands at discounted prices.</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      🚌 Sustainability & Accessibility
                    </h4>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• Sustainable shopping: Many shops encourage reusable bags and environmentally friendly products.</li>
                      <li>• Transportation: Public transit and shuttles connect main shopping areas for easy access.</li>
                    </ul>
                  </div>
                </div>

                <h2
                  id="restaurant_options"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-orange-500 pl-4"
                >
                  Restaurant Options
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Seattle’s culinary scene is a vibrant mix of fresh seafood, global flavors, and casual comfort food. Whether you’re grabbing a quick bite or celebrating a special occasion, the city’s eateries have you covered.
                </p>

                <div className="p-4 my-8 rounded-r-lg">
                  <h4 className="font-semibold bg-yellow-50 text-yellow-900 p-2 border-l-4 border-yellow-400">
                    🍽️ Classic & Must-Try Spots
                  </h4>
                  <p className="text-yellow-800">
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Pike Place Chowder</strong> — Award-winning clam chowder in a sourdough bowl.</li>
                      <li><strong>The Pink Door</strong> — Cozy Italian with pasta and live entertainment.</li>
                      <li><strong>Piroshky Piroshky</strong> — Russian bakery with delicious hand-held pastries.</li>
                      <li><strong>Canlis</strong> — Upscale dining with beautiful views of Lake Union.</li>
                      <li><strong>Ray’s Boathouse</strong> — Fresh seafood with waterfront views.</li>
                      <li><strong>Dick’s Drive-In</strong> — Classic fast food for burgers, fries, and shakes.</li>
                      <li><strong>Musashi’s</strong> — Fresh sushi and sashimi in a casual setting.</li>
                      <li><strong>Beecher’s Handmade Cheese</strong> — Famous for mac & cheese and fresh cheese curds.</li>
                    </ul>
                  </p>
                  </div>
              
              <div className="p-4 my-8 rounded-r-lg">
                <h4 className="font-semibold bg-indigo-100 text-indigo-900 p-2 border-l-4 border-indigo-500">
                  🍔 Near University District Favorites
                </h4>
                <p className="text-indigo-800">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Chuan House</strong> — Bold and spicy Sichuan Chinese dishes.</li>
                    <li><strong>Red Pepper</strong> — Affordable Chinese comfort food with generous portions.</li>
                    <li><strong>YGF</strong> — Crispy Korean fried chicken, perfect for late-night bites.</li>
                    <li><strong>Korean Tofu House</strong> — Hearty Korean tofu stews and comfort foods.</li>
                    <li><strong>Thai Tom</strong> — Flavorful, authentic Thai street food.</li>
                    <li><strong>Cafe on the Ave</strong> — Relaxed café for breakfast, sandwiches, and coffee.</li>
                    <li><strong>Chimac</strong> — Korean fried chicken and beer for casual hangouts.</li>
                  </ul>
                </p>
              </div>

              <div className="p-4 my-8 rounded-r-lg">
                <h4 className="font-semibold bg-blue-50 text-blue-800 p-2 border-l-4 border-blue-400">
                  ☕ Best Cafes on The Ave
                </h4>
                <p className="text-blue-800">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Lune Cafe</strong> — Cozy spot with great coffee and pastries, perfect for studying.</li>
                    <li><strong>Sip House</strong> — Relaxed cafe with high-quality coffee and seasonal drinks.</li>
                    <li><strong>Ancient Gate</strong> — Hidden gem offering organic coffee and tea in a peaceful setting.</li>
                    <li><strong>Cafe on the Ave</strong> — A U-District favorite with coffee, breakfast, and sandwiches.</li>
                    <li><strong>Leon Coffee House</strong> — Cozy ambiance and strong coffee, ideal for students.</li>
                  </ul>
                </p>
              </div>

                <h2
                  id="weather_gear"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-purple-500 pl-4"
                >
                  Weather Gear
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Seattle weather can be tough for students, but with the right gear, you’ll stay dry and comfortable. A waterproof jacket and shoes are key for rainy days, while layering with hoodies and scarves helps with changing temperatures. Keep a compact umbrella in your bag and pack warm accessories for chilly mornings. Breathable, quick-dry fabrics will keep you fresh, whether you're in class or outdoors.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Student Weather Essentials
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div class="text-center">
                      <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span class="text-indigo-600 font-bold">J</span>
                      </div>
                      <p class="font-medium">Waterproof Jacket</p>
                      <p class="text-sm text-gray-600">Lightweight and easy to carry.</p>
                    </div>
                    <div class="text-center">
                      <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span class="text-pink-600 font-bold">S</span>
                      </div>
                      <p class="font-medium">Water-Resistant Shoes</p>
                      <p class="text-sm text-gray-600">Perfect for Seattle's wet days.</p>
                    </div>
                    <div class="text-center">
                      <div class="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span class="text-cyan-600 font-bold">L</span>
                      </div>
                      <p class="font-medium">Layering Pieces</p>
                      <p class="text-sm text-gray-600">Hoodies and scarves for easy packing.</p>
                    </div>
                    <div class="text-center">
                      <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span class="text-yellow-600 font-bold">U</span>
                      </div>
                      <p class="font-medium">Compact Umbrella</p>
                      <p class="text-sm text-gray-600">Won’t slow you down during rain.</p>
                    </div>
                    <div class="text-center">
                      <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span class="text-green-600 font-bold">H</span>
                      </div>
                      <p class="font-medium">Warm Hats & Gloves</p>
                      <p class="text-sm text-gray-600">For chilly mornings and outdoor events.</p>
                    </div>
                    <div class="text-center">
                      <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span class="text-red-600 font-bold">B</span>
                      </div>
                      <p class="font-medium">Breathable Fabrics</p>
                      <p class="text-sm text-gray-600">Stay comfortable in class and on the go.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </main>

          {/* Enhanced Visual Sidebar */}
          <aside className="w-full lg:w-80 space-y-6">
            {/* Table of Contents */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h5 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                In this article
              </h5>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#cultural_adjustment"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                    Cultural Adjustment
                  </a>
                </li>
                <li>
                  <a
                    href="#shopping_options"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                    Shopping Options
                  </a>
                </li>
                <li>
                  <a
                    href="#restaurant_options"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                    Restaurant Options
                  </a>
                </li>
                <li>
                  <a
                    href="#weather_gear"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                    Weather Gear
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Hidden Gems in Seattle
              </h3>
              <div className="space-y-4">
                {/* Discovery Park */}
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src="discovery-park.jpg"
                    alt="Discovery Park"
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Discovery Park: Stunning views & trails
                  </div>
                </div>

                {/* Kerry Park */}
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src="kerry-park.jpg"
                    alt="Kerry Park"
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Kerry Park: Best skyline view
                  </div>
                </div>

                {/* The Fremont Troll */}
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src="fremont-troll.jpg"
                    alt="The Fremont Troll"
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    The Fremont Troll: Iconic sculpture under the bridge
                  </div>
                </div>
              </div>
            </div>

            {/* Seattle Neighborhoods/Places */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Seattle Neighborhoods
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <span className="text-blue-900 font-medium">🏳️‍🌈 Capitol Hill</span>
                    <p className="text-blue-600 font-bold text-sm mt-1">LGBTQ+ vibes & nightlife</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <span className="text-green-900 font-medium">🦀 Ballard</span>
                    <p className="text-green-600 font-bold text-sm mt-1">Seafood & Nordic charm</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div>
                    <span className="text-purple-900 font-medium">🎨 Fremont</span>
                    <p className="text-purple-600 font-bold text-sm mt-1">Artistic & quirky</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <span className="text-orange-900 font-medium">🏡 Queen Anne</span>
                    <p className="text-orange-600 font-bold text-sm mt-1">Views & historic homes</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <span className="text-teal-900 font-medium">🎓 U-District</span>
                    <p className="text-teal-600 font-bold text-sm mt-1">Student life & coffee</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Related Articles
              </h3>
              <div className="space-y-4">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="relative z-10">
                      <div className="text-xs text-gray-300 flex items-center gap-x-2 mb-2">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span className="text-white/50">•</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-blue-200 transition-colors">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h4>
                      <p className="text-xs text-gray-300 line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

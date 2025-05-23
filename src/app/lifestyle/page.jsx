"use client";
import React from "react";
import Breadcrumb from "../components/breadcrumb";
import { usePathname } from "next/navigation";
import blogHeader from "../../../public/data/blogHeader.json";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "5 Tips for Navigating Seattle’s Weather as a Student",
    href: "/blog/seattle-weather-tips",
    imageUrl: "/images/weather-tips.jpg",
    date: "May 10, 2025",
    datetime: "2025-05-10",
    author: {
      name: "Enrico Pratama",
      imageUrl: "/assets/enrico.png",
    },
  },
  {
    id: 2,
    title: "Top 10 Student-Friendly Eateries Near UW",
    href: "/blog/uw-dining-guide",
    imageUrl: "/images/uw-food.jpg",
    date: "April 25, 2025",
    datetime: "2025-04-25",
    author: {
      name: "Enrico Pratama",
      imageUrl: "/assets/enrico.png",
    },
  },
  {
    id: 3,
    title: "How to Make the Most of Seattle’s Outdoor Life",
    href: "/blog/seattle-outdoors",
    imageUrl: "/images/seattle-outdoors.jpg",
    date: "April 5, 2025",
    datetime: "2025-04-05",
    author: {
      name: "Enrico Pratama",
      imageUrl: "/assets/enrico.png",
    },
  },
];



export default function Page() {
   const titleName = usePathname().split("/").at(-1);
  const headerData = blogHeader[titleName] || {};
  return (
    <div className="bg-white min-h-screen py-10 px-6 md:px-12 lg:px-32 xl:px-48">
          {/* Breadcrumb */}
          <Breadcrumb />
    
          {/* Header Card */}
          <div className="mt-8 mb-10 bg-gradient-to-r from-yellow-400 to-yellow-300 text-white rounded-lg p-6 text-center">
            <h1 className="text-lg tracking-widest font-semibold uppercase">
              {headerData.location || "BELLEVUE"}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              {headerData.title || "Lifestyle & Adjustments"}
            </h2>
          </div>
    
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <main className="flex-1 prose prose-lg max-w-none">
              <div id="cultural_adjustment" className="pb-10 mb-10">
                  <h3 className="text-lg font-bold mb-3">Cultural Adjustment</h3>
                  <p className="mb-4">
                    Starting university in Seattle means stepping into a city full of opportunities but with its own unique vibe. To help you settle in smoothly and enjoy your college experience:
                  </p>
                  <p className="mb-4">
                    Seattle is an outdoorsy city, so getting involved in activities like hiking, biking, or just chilling at the parks can help you make friends and stay active—even if it’s raining. Coffee culture is huge here, so expect many study sessions and hangouts at local cafés around campus. Seattle locals tend to be polite but a bit reserved at first, so don’t be discouraged if conversations are brief—you’ll find your crew with time. And yes, talking about the weather (especially the rain) is a great way to break the ice with classmates!
                  </p>
                  <p className="mb-2 font-semibold">Student tips to fit in:</p>
                  <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>Join campus clubs, student organizations, or volunteer groups to build your social circle.</li>
                    <li>Explore the outdoors with classmates—it’s a great stress-reliever during busy semesters.</li>
                    <li>Adopt sustainable habits—campus life often encourages eco-friendly living.</li>
                    <li>Be patient and open to new friendships; college is about growing your community gradually.</li>
                  </ul>
                </div>

                <div id="shopping_options" className="pb-10 mb-10">
                  <h3 className="text-lg font-bold mb-3">Shopping Options</h3>
                  <p className="mb-4">
                    Seattle offers a rich shopping landscape that caters to all tastes—from artisanal markets to large malls and outlet centers.
                    At the core is Pike Place Market, a historic and bustling spot where you can find fresh produce, flowers, seafood, and handcrafted goods. For vintage finds, trendy boutiques, and sustainable fashion, the University District and Capitol Hill neighborhoods provide a lively shopping atmosphere. If you prefer a traditional mall experience, Alderwood Mall has a broad selection of popular retailers and eateries. For bargain hunters, the Seattle Premium Outlets are ideal for discounted luxury and brand-name shopping, located just a short drive outside the city.
                  </p>
                  <p className="mb-2 font-semibold">Shopping highlights:</p>
                  <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>Pike Place Market: Best for local food, crafts, and fresh flowers.</li>
                    <li>University District & Capitol Hill: Great for unique boutiques, thrift stores, and eco-friendly products.</li>
                    <li>Alderwood Mall: Large indoor mall with diverse shops and dining options.</li>
                    <li>Seattle Premium Outlets: Designer brands at discounted prices.</li>
                    <li>Sustainable shopping: Many shops encourage reusable bags and environmentally friendly products.</li>
                    <li>Transportation: Public transit and shuttles connect main shopping areas for easy access.</li>
                  </ul>
                </div>

                <div id="restaurant_options" className="pb-10 mb-10">
                  <h3 className="text-lg font-bold mb-3">Restaurant Options</h3>
                  <p className="mb-4">
                    Seattle’s culinary scene is a vibrant mix of fresh seafood, global flavors, and casual comfort food. Whether you’re grabbing a quick bite or celebrating a special occasion, the city’s eateries have you covered.
                    Seafood is a highlight, with spots like Pike Place Chowder serving their award-winning clam chowder in sourdough bread bowls, and Ray’s Boathouse offering fresh salmon alongside stunning waterfront views. For Italian cuisine with ambiance, The Pink Door combines great food with live entertainment. If you want quick and classic fast food, Dick’s Drive-In is a beloved local institution. Japanese food lovers will find authentic sushi and sashimi at Maneki and Musashi’s. For unique snacks, Piroshky Piroshky offers delicious Russian pastries, while Beecher’s Handmade Cheese is famous for its rich mac & cheese.
                  </p>
                  <p className="mb-2 font-semibold">Classic & Must-Try spots are Seattle staples that every student should experience at least once:</p>
                  <ul className="list-disc list-inside mb-4 space-y-1">
                    <li><strong>Pike Place Chowder</strong> — Famous for its award-winning clam chowder served in a sourdough bread bowl, a comforting and filling meal after a long day.</li>
                    <li><strong>The Pink Door</strong> — Cozy Italian restaurant in Pike Place Market with delicious pasta and live entertainment, perfect for a special night out.</li>
                    <li><strong>Piroshky Piroshky</strong> — A Russian bakery known for its hand-held pastries with sweet and savory fillings, great for a quick snack between classes.</li>
                    <li><strong>Canlis</strong> — Upscale fine dining with stunning views of Lake Union, ideal for celebrating special occasions.</li>
                    <li><strong>Ray’s Boathouse</strong> — Local seafood favorite offering fresh salmon, crab cakes, and clam chowder with waterfront views.</li>
                    <li><strong>Dick’s Drive-In</strong> — Seattle’s iconic fast-food chain known for tasty and affordable burgers, fries, and shakes — a classic student favorite.</li>
                    <li><strong>Maneki</strong> — One of Seattle’s oldest sushi restaurants, offering authentic Japanese dishes in a historic setting.</li>
                    <li><strong>Spud Fish & Chips</strong> — Serving traditional fish and chips with a relaxing lakeside view, a perfect casual meal.</li>
                    <li><strong>Musashi’s</strong> — Known for fresh sushi and sashimi in a simple, no-frills environment, great for budget-conscious students.</li>
                    <li><strong>Beecher’s Handmade Cheese</strong> — Famous for its “World’s Best” mac & cheese and fresh cheese curds, comfort food at its best.</li>
                  </ul>
                  <p className="mb-2 font-semibold">Near University District Favorites:</p>
                  <p className="mb-2">Close to campus, these spots are popular hangouts for students looking for great food without breaking the bank!</p>
                  <ul className="list-disc list-inside mb-4 space-y-1">
                    <li><strong>Chuan House</strong> — Specializes in bold and spicy Sichuan Chinese cuisine, perfect for those who love flavorful dishes.</li>
                    <li><strong>Red Pepper</strong> — Affordable and tasty Chinese comfort food, with generous portions to keep you fueled during study marathons.</li>
                    <li><strong>YGF (You Gotta Fry)</strong> — A late-night favorite serving crispy Korean fried chicken with unique sauces—great for group hangouts.</li>
                    <li><strong>Korean Tofu House</strong> — Cozy spot known for hearty Korean tofu stews and comfort dishes, ideal for cold or stressful days.</li>
                    <li><strong>Thai Tom</strong> — Authentic Thai street food with bold flavors, offering a vibrant dining experience close to campus.</li>
                    <li><strong>Cafe on the Ave</strong> — A relaxed café serving American-style breakfast, sandwiches, and coffee—perfect for casual meetups or studying.</li>
                    <li><strong>Ku Sushi</strong> — A cozy sushi bar with fresh rolls and sashimi, great for a quick, affordable meal.</li>
                    <li><strong>Toasted</strong> — Specializes in toasted sandwiches and breakfast options, perfect for grabbing a quick bite between classes.</li>
                    <li><strong>Aladdin Fries</strong> — Popular late-night spot for seasoned fries and Mediterranean street food, ideal for late study sessions.</li>
                    <li><strong>Chimac</strong> — Casual Korean fried chicken and beer joint, perfect for unwinding with friends after exams.</li>
                  </ul>
                </div>

                <div id="weather_gear" className="pb-10 mb-10">
                  <h3 className="text-lg font-bold mb-3">Weather Gear</h3>
                  <p className="mb-4">
                    Seattle weather can be a challenge for students juggling classes and social life, but with the right gear, you’ll stay comfy and dry all year round.
                    A waterproof jacket is essential for trekking between classes during rainy days, and waterproof shoes will save you from soggy feet—no fun when you’ve got a long day ahead. Since the weather can change throughout the day, layering is your best friend: think hoodies, sweaters, and scarves that you can put on or take off easily. Always keep a compact umbrella in your backpack, and pack warm accessories for chilly mornings or late nights on campus. Breathable, quick-dry fabrics will keep you feeling fresh whether you’re in lecture halls or hanging out outside.
                  </p>
                  <p className="mb-2 font-semibold">Student weather essentials:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>A lightweight, waterproof jacket that’s easy to carry between classes.</li>
                    <li>Water-resistant shoes or boots for those wet Seattle days.</li>
                    <li>Layering pieces like hoodies and scarves that fit into your backpack.</li>
                    <li>A compact umbrella that won’t slow you down.</li>
                    <li>Warm hats and gloves for early mornings or outdoor events.</li>
                    <li>Choose breathable fabrics to stay comfortable in classrooms and on the go.</li>
                  </ul>
                </div>
            </main>
            {/* Sidebar */}
            <aside className="w-full lg:w-80 space-y-6 sticky top-20">
              {/* Author Profile */}
              <div className="bg-purple-100 rounded-lg p-4 text-center">
                <Image
                  src="/assets/enrico.png"
                  alt="Author profile"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-2"
                />
                <h4 className="font-semibold text-purple-900">Enrico Pratama</h4>
                <p className="text-sm text-gray-700">
                  AMAZON Intern, Teaching Assistant, CS Tutor, WebDev Lead, Google SWE
                </p>
              </div>

              {/* In This Article */}
              <div className="bg-white border rounded-lg p-4">
                <h5 className="text-sm font-semibold mb-2 text-gray-800">
                  In This Article
                </h5>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>
                    <a href="#cultural_adjustment" className="hover:text-purple-700">
                      Cultural Adjustment
                    </a>
                  </li>
                  <li>
                    <a href="#shopping_options" className="hover:text-purple-700">
                      Shopping Options
                    </a>
                  </li>
                  <li>
                    <a href="#restaurant_options" className="hover:text-purple-700">
                      Restaurant Options
                    </a>
                  </li>
                  <li>
                    <a href="#weather_gear" className="hover:text-purple-700">
                      Weather Gear
                    </a>
                  </li>
                </ul>
              </div>

              {/* From the Blog */}
              <div className="bg-white py-6 px-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">From the Blog</h3>
                <div className="space-y-6">
                  {posts && posts.length > 0 ? (
                    posts.map((post) => (
                      <article
                        key={post.id}
                        className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl bg-gray-900 px-5 pt-56 pb-5 cursor-pointer hover:scale-[1.02] transition-transform duration-200"
                      >
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="absolute inset-0 -z-10 w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 rounded-xl" />
                        <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-gray-900/10 ring-inset" />

                        <div className="text-sm text-gray-300 flex items-center gap-x-2">
                          <time dateTime={post.datetime}>{post.date}</time>
                          <span className="text-white/50">•</span>
                          <div className="flex items-center gap-x-2">
                            <img
                              src={post.author.imageUrl}
                              alt={post.author.name}
                              className="w-6 h-6 rounded-full"
                            />
                            <span>{post.author.name}</span>
                          </div>
                        </div>
                        <h3 className="mt-2 text-base font-semibold text-white">
                          <a href={post.href} className="relative z-10">
                            {post.title}
                          </a>
                        </h3>
                      </article>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">No blog posts available.</p>
                  )}
                </div>
              </div>
            </aside>
          </div>
    </div>
  );
}

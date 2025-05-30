"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "../components/breadcrumb";
import blogHeader from "../../../public/data/blogHeader.json";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
      <div className="mt-8 mb-10 bg-gradient-to-r from-indigo-900 to-purple-700 text-white rounded-lg p-6 text-center">
        <h1 className="text-lg tracking-widest font-semibold uppercase">
          {headerData.location || "LOCATION NAME"}
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          {headerData.title || "Blog Title Placeholder"}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <main className="flex-1 prose prose-lg max-w-none">
          <div id="phone_connectivity" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">Phone & Connectivity</h3>
            <p>
              As a first-year student coming to the University of Washington
              Seattle, having a reliable phone and internet connection is
              essential. When you arrive in the U.S., one of the first things
              you'll want to do is get a local phone number. Most international
              students choose to buy a U.S. SIM card from popular carriers such
              as T-Mobile, AT&T, Verizon, Mint Mobile, or Visible. These
              carriers offer prepaid plans starting from around $15 to $50 per
              month, depending on the amount of mobile data you need. Some even
              offer student discounts or international calling options. <br />{" "}
              <br />
              If your current provider in your home country offers international
              roaming, you can use that temporarily during your first few days,
              but it’s usually expensive and not suitable for long-term use.
              It’s recommended to bring an unlocked phone so you can easily
              switch to a U.S. SIM card. <br /> <br />
              When it comes to staying connected online, UW provides excellent
              Wi-Fi coverage across campus. The main networks are “eduroam” and
              “University of Washington,” with eduroam being the more secure and
              preferred option, especially since it works at many universities
              around the world. You’ll use your UW NetID to log into these
              networks. Wi-Fi is available in classrooms, libraries, dorms,
              student centers like the HUB, and even in many outdoor areas. If
              you’re living in a UW dorm such as McMahon, Willow, or Maple Hall,
              you’ll have access to free Wi-Fi and Ethernet internet directly in
              your room. <br />
              <br />
              However, if you choose to live off-campus, you may need to set up
              your own home internet service with providers like Xfinity or
              CenturyLink, which typically costs around $40 to $70 per month. To
              stay organized, it's helpful to download apps like WhatsApp or
              Telegram to keep in touch with family and friends, and UW-specific
              tools like the Husky Mobile app. If you have any trouble setting
              up your phone or connecting to the internet, UW IT Connect is
              available to help students with tech support.
            </p>
          </div>

          <div id="banking_finances" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">Banking & Finances</h3>
            <p>
              As a first-year student at the University of Washington Seattle,
              opening a U.S. bank account is an important step in managing your
              finances and making everyday transactions more convenient. Whether
              you need to pay for food, receive paychecks from a part-time job,
              or send money to friends, having a U.S.-based account will make
              your financial life much easier. <br />
              <br /> The two most common types of bank accounts you'll want to
              open are a checking account and a savings account. A checking
              account is used for everyday transactions such as paying bills,
              making purchases, or withdrawing cash from ATMs. You’ll get a
              debit card connected to your checking account that works like a
              digital wallet—allowing you to pay at stores, online, and even add
              to your Apple Pay or Google Pay for tap-to-pay purchases. Most
              debit cards also work with Zelle, a bank-to-bank transfer app
              built into many U.S. banking apps that lets you send and receive
              money instantly using just an email or phone number.
              <br />
              <br /> A savings account, on the other hand, is where you can
              store money you don’t plan to use immediately. It’s useful for
              budgeting, emergency savings, or long-term planning. Some savings
              accounts also offer a small amount of interest, though this varies
              depending on the bank. <br />
              <br /> When it comes to choosing a bank, many UW students prefer
              large national banks such as Bank of America, Chase, and Wells
              Fargo because they have branches and ATMs near campus, including
              along University Way ("The Ave") and at the U-District Link light
              rail station. These banks offer student-friendly checking accounts
              with no monthly maintenance fees and low initial deposit
              requirements. Some students also choose local credit unions such
              as WSECU (Washington State Employees Credit Union) or BECU (Boeing
              Employees Credit Union), which often have lower fees and better
              customer service but may have fewer physical locations.
              <br />
              <br /> You may also consider applying for a credit card,
              especially if you're planning to build your credit history in the
              U.S. Many banks offer starter credit cards for students with low
              credit limits, making it easier to build responsible financial
              habits. Be cautious with credit cards—only spend what you can
              afford to pay back, and always pay your balance on time to avoid
              interest and late fees. <br />
              <br /> In addition to Zelle, other popular peer-to-peer (P2P)
              payment apps include Venmo and Cash App, which are commonly used
              among students to split bills, pay for club events, or buy
              secondhand items. You can link these apps to your checking account
              or debit card. For added convenience, many students also link
              their debit or credit cards to Apple Pay or Google Pay so they can
              make secure, contactless payments with their smartphones.
              <br />
              <br /> To open a bank account, you’ll generally need your
              passport, I-20 or DS-2019, UW student ID, U.S. phone number, and
              local mailing address (such as your dorm or apartment). It’s best
              to visit a bank branch in person during your first few days in
              Seattle. Once your account is set up, download your bank’s app for
              mobile banking, where you can monitor your balance, transfer
              money, and pay bills on the go.
              <br />
              <br /> Lastly, always be cautious of scams or fraud attempts.
              Never share your bank details with strangers, and enable
              two-factor authentication when available. UW also offers financial
              wellness resources if you ever need help understanding how to
              manage your money wisely.
            </p>
          </div>
          <div id="transportation_options" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">Transportation Option</h3>
            <p>
              Getting around Seattle as a first-year student at the University
              of Washington is convenient and student-friendly thanks to the
              city’s well-connected public transportation system and UW’s
              resources. One of the most popular modes of transportation is the
              Link Light Rail, which has a station (U District Station) just a
              few minutes’ walk from campus. The Link connects the University
              District to downtown Seattle, the airport (SeaTac), Capitol Hill,
              and other key areas. It’s fast, reliable, and ideal for weekend
              trips or commuting to internships off campus. <br />
              <br /> UW students receive a U-PASS, which is included in your
              tuition and gives you unlimited rides on public buses, the light
              rail, and even some regional transit services like Sound Transit
              and Community Transit. With your Husky Card, you can simply tap in
              when boarding and tap out when needed—no need to buy separate
              tickets. This makes it incredibly easy and affordable to explore
              Seattle and the surrounding neighborhoods without a car. <br />
              <br /> For local travel within the city, King County Metro buses
              are a great option. Bus stops are located all around campus and
              the U-District, and schedules can be checked using apps like
              OneBusAway, Google Maps, or Transit App. The buses are frequent
              and reliable, even during weekends and evenings. If you prefer
              biking, UW also supports cycling with bike racks, repair stations,
              and a network of bike lanes around campus. You can also rent
              electric bikes or scooters from companies like Lime, Bird, or
              Spin—just download the app and scan to ride. <br />
              <br />
              Many students also use rideshare services such as Uber or Lyft for
              late-night travel, grocery trips, or when traveling in groups.
              While more expensive than public transit, they’re helpful when you
              need flexibility or are traveling outside the light rail or bus
              coverage. For day trips or errands, car rentals and Zipcar (a
              car-sharing service available near campus) are also available.
              Zipcar allows you to rent a vehicle by the hour or day, and you
              only need a valid driver's license and a student membership to
              sign up <br />
              <br /> If you’re considering bringing your own car, keep in mind
              that parking on campus is limited and expensive, and you’ll need
              to apply for a parking permit. For most students living in the
              dorms or nearby housing, having a car isn’t necessary, thanks to
              the wide availability of transit and walkable neighborhoods.
              <br />
              <br />
              Overall, transportation at UW is affordable, sustainable, and
              designed to support students whether you're heading to class,
              going downtown, or exploring the greater Seattle area. Make sure
              to activate your U-PASS, download helpful transit apps, and take
              advantage of the safe and accessible transit options available
              throughout the city.
            </p>
          </div>
          <div id="everyday_essentials" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">Everyday Essentials</h3>
            <p>
              As a new student settling into life at the University of
              Washington Seattle, knowing where and how to get your everyday
              essentials—like groceries, toiletries, school supplies, and basic
              household items—is key to feeling comfortable and prepared.
              Fortunately, the U-District and nearby neighborhoods offer a wide
              variety of stores and resources to help you get what you need
              without going far from campus. <br />
              <br /> For groceries, there are several options depending on your
              budget and preferences. Safeway, Trader Joe’s, and Whole Foods are
              popular among students and are all accessible by foot, bus, or
              light rail. Safeway offers a wide range of items at affordable
              prices, especially with a store membership card. Trader Joe’s is
              known for budget-friendly snacks and meals, while Whole Foods
              carries organic and specialty items. For Asian groceries,
              Uwajimaya in the International District and H Mart in University
              Village or downtown are great for ingredients like rice, noodles,
              sauces, and snacks from various Asian countries. There’s also
              Target and CVS nearby for personal care items, laundry products,
              and cleaning supplies.
              <br />
              <br /> For day-to-day school supplies, tech accessories, and
              university merchandise, you can visit the University Book Store
              right on University Way (“The Ave”). They carry notebooks, pens,
              UW apparel, and even laptops and electronics. Stores like Best Buy
              (Northgate or downtown) or Office Depot can also be helpful if you
              need larger equipment like printers or external monitors for your
              dorm setup.
              <br />
              <br /> If you’re living in a dorm or apartment, you may want to
              stock up on essentials like bedsheets, towels, kitchen utensils,
              and storage bins. Target and IKEA (reachable by light rail and
              bus) are go-to destinations for affordable furniture and home
              goods. You can also find secondhand items through Facebook
              Marketplace, Goodwill, or student swap groups on platforms like
              Discord or Instagram. <br />
              <br />
              For quick meals or snacks, the UW campus and surrounding
              U-District area are packed with cafes, food trucks, bubble tea
              shops, and fast casual restaurants, making it easy to grab
              something between classes. Most places accept debit/credit cards,
              and many support Apple Pay or Google Pay for fast checkout. Food
              delivery apps like Uber Eats, DoorDash, and Grubhub are also
              widely used if you prefer eating at home. <br />
              <br />
              Don't forget to bring or buy reusable items like a water bottle,
              shopping bag, or travel mug—not only do they reduce waste, but
              many Seattle businesses give small discounts if you bring your
              own. And if you need anything in a hurry, Amazon lockers are
              located around campus, letting you order items online and pick
              them up conveniently. <br />
              <br />
              Adjusting to a new place can feel overwhelming at first, but
              Seattle offers a supportive, student-friendly environment with
              everything you need within easy reach. With time, you’ll build
              your own routines and discover go-to spots that make everyday life
              smoother and more enjoyable.
            </p>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 space-y-6">
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
              AMAZON Intern, Teaching Assistant, CS Tutor, WebDev Lead, Google
              SWE
            </p>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h5 className="text-sm font-semibold mb-2 text-gray-800">
              In this article
            </h5>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>Safeway UDistrict</li>
              <li>AI Writing Pitfalls</li>
              <li>ChatGPT Style</li>
              <li>AI Transparency</li>
            </ul>
          </div>

          <div className="bg-white py-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              From the blog
            </h3>
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl bg-gray-900 px-5 pt-56 pb-5"
                >
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 -z-10 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-gray-900/10 ring-inset" />

                  <div className="text-sm text-gray-300 flex items-center gap-x-2">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span className="text-white/50">•</span>
                    <div className="flex items-center gap-x-2">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="w-6 h-6 rounded-full"
                      />
                      <span>{post.author.name}</span>
                    </div>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-white">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

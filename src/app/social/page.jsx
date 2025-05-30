"use client";
import React from "react";
import Breadcrumb from "../components/breadcrumb";
import { usePathname } from "next/navigation";
import blogHeader from "../../../public/data/blogHeader.json";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Top 7 Student Organizations to Join at UW",
    href: "/blog/top-student-organizations-uw",
    imageUrl: "/images/student-orgs-uw.jpg",
    date: "May 12, 2025",
    datetime: "2025-05-12",
    author: {
      name: "Enrico Pratama",
      imageUrl: "/assets/enrico.png",
    },
  },
  {
    id: 2,
    title: "How Joining Clubs Can Boost Your College Experience",
    href: "/blog/benefits-of-student-clubs",
    imageUrl: "/images/club-benefits.jpg",
    date: "April 30, 2025",
    datetime: "2025-04-30",
    author: {
      name: "Enrico Pratama",
      imageUrl: "/assets/enrico.png",
    },
  },
  {
    id: 3,
    title: "Guide to Cultural and Hobby Clubs on Campus",
    href: "/blog/cultural-hobby-clubs-guide",
    imageUrl: "/images/cultural-clubs.jpg",
    date: "April 18, 2025",
    datetime: "2025-04-18",
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
      <div className="mt-8 mb-10 bg-gradient-to-r from-green-900 to-green-800 text-white rounded-lg p-6 text-center">
        <h1 className="text-lg tracking-widest font-semibold uppercase">
          {headerData.location || "DOWNTOWN SEATTLE"}
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          {headerData.title || "Social and Academic Integration"}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <main className="flex-1 prose prose-lg max-w-none">
          {/* Student Organizations & Clubs */}
          <div id="student_org" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">Student Organizations & Clubs</h3>
            <p>
              College life is much more than lectures and exams — it’s about
              finding your tribe, exploring your passions, and building lifelong
              friendships. One of the best ways to do this at the University of
              Washington and other Seattle campuses is through student
              organizations and clubs. These groups provide a supportive
              environment where you can learn new skills, develop leadership,
              and enjoy activities that complement your academic journey.
              Whether you want to dive deeper into your field of study,
              celebrate your cultural heritage, or unwind with hobbies and
              recreational activities, there is a vibrant community waiting for
              you.
            </p>
            <p>
              Students are encouraged to take part in these groups early on, as
              they often host social mixers, workshops, and volunteering
              opportunities that enrich your campus experience and help you grow
              both personally and professionally.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>
                <strong>Business:</strong> Undergraduate Women in Business
                (UWiB), Entrepreneurship & Venture Capital Club, First
                Generation Business Leaders, and Investment Banking Accelerator.
              </li>
              <li>
                <strong>Engineering:</strong> Society of Women Engineers,
                DubHacks Hackathon, Engineers Without Borders, and American
                Society of Civil Engineers.
              </li>
              <li>
                <strong>Computer Science:</strong> Husky Coding Project,
                Association for Computing Machinery (ACM), Women in Computing,
                and COM² (CS & Communication).
              </li>
              <li>
                <strong>Sciences:</strong> Pre-Medical Society, Biology Club,
                Environmental Science & Sustainability Club, Neuroscience Club.
              </li>
              <li>
                <strong>Arts & Humanities:</strong> Creative Writing Club, UW
                Film Society, International Student Cultural Association, and
                Theatre Club.
              </li>
            </ul>
            <p>
              With hundreds of registered student organizations across diverse
              interests, there’s no shortage of ways to connect. Most campuses
              also host an annual involvement fair where you can explore clubs,
              meet leaders, and sign up to join. Don’t forget to check online
              directories like HuskyLink to discover and engage with the
              community throughout the year.
            </p>
          </div>

          {/* Religious and Spiritual Resources */}
          <div id="religious_spiritual" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">
              Religious and Spiritual Resources
            </h3>
            <p>
              Navigating college life is not just an academic challenge but also
              a personal and spiritual journey for many students. Seattle
              campuses recognize the importance of nurturing your inner life and
              offer a variety of resources that support students of all faiths
              and spiritual backgrounds. Whether you are seeking a quiet place
              for reflection, a community to share your beliefs, or
              opportunities to engage in interfaith dialogue, you’ll find
              welcoming spaces designed to support your spiritual well-being.
            </p>
            <p>
              Campus ministries and chaplaincies provide regular worship
              services, meditation and mindfulness groups, counseling, and
              social events that foster connection and growth. Dedicated prayer
              and meditation rooms offer quiet retreats amid busy campus life,
              while faith-based student groups organize study sessions,
              volunteer activities, and cultural celebrations that deepen your
              sense of belonging.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>
                <strong>Campus Ministries and Chaplaincies:</strong> These
                centers offer worship services, meditation groups, counseling,
                and interfaith dialogues to help students grow spiritually and
                find peace.
              </li>
              <li>
                <strong>Prayer and Meditation Spaces:</strong> Quiet rooms or
                dedicated chapels are available for personal reflection or group
                prayer.
              </li>
              <li>
                <strong>Faith-Based Student Groups:</strong> Join groups
                centered on religious traditions or spiritual philosophies for
                social activities, study sessions, and volunteer opportunities.
              </li>
              <li>
                <strong>Inclusive Environment:</strong> Seattle campuses
                emphasize respect and inclusivity for all beliefs, fostering a
                supportive atmosphere for everyone.
              </li>
            </ul>
            <p>
              Engaging with these resources can provide valuable support and
              balance, helping you navigate the stresses of university life
              while staying connected to your spiritual identity.
            </p>
          </div>

          {/* Events & Entertainment */}
          <div id="events_entertainment" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">Events & Entertainment</h3>
            <p>
              Beyond academics, Seattle offers an incredibly rich and diverse
              cultural scene that invites students to unwind, explore, and
              celebrate life. The city’s many festivals, outdoor adventures,
              sports, and arts events create countless opportunities to make
              memories and deepen your connection to the community. Whether
              you’re interested in traditional cultural festivals, exciting
              outdoor activities, or vibrant campus socials, you’ll find plenty
              to keep your weekends and evenings full and fun.
            </p>
            <p>
              Many of these events are organized or supported by student groups,
              making it easy to get involved and meet like-minded peers.
              Participating in local and campus activities not only provides a
              healthy break from study but also helps build friendships and
              create a well-rounded university experience.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>
                <strong>Seasonal Festivals:</strong> Enjoy the Cherry Blossom &
                Japanese Cultural Festival in spring or the Leavenworth
                Christmas Lighting Festival in winter for festive community fun.
              </li>
              <li>
                <strong>Outdoor Activities:</strong> Explore kayaking in the San
                Juan Islands, hiking Mount Rainier, or biking along scenic
                trails like the Burke-Gilman.
              </li>
              <li>
                <strong>Sports:</strong> Cheer on UW Baseball games at Husky
                Ballpark or join intramural leagues to stay active and social.
              </li>
              <li>
                <strong>Performances & Arts:</strong> Attend UW Theatre
                productions, music concerts, and film screenings offered by
                campus clubs.
              </li>
              <li>
                <strong>Local Hangouts:</strong> Visit iconic spots like Pike
                Place Market, Alki Beach, or Gas Works Park for a blend of
                culture and relaxation.
              </li>
            </ul>
            <p>
              By embracing these vibrant events and entertainment options, you
              can enrich your college years with unique experiences and
              friendships that last a lifetime.
            </p>
          </div>
        </main>
        {/* Sidebar */}
        <aside className="w-full lg:w-80 space-y-6 sticky top-20">
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
              In This Article
            </h5>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>
                <a href="#student_org" className="hover:text-purple-700">
                  Student Organizations & Clubs
                </a>
              </li>
              <li>
                <a
                  href="#religious_spiritual"
                  className="hover:text-purple-700"
                >
                  Religious and Spiritual Resources
                </a>
              </li>
              <li>
                <a
                  href="#events_entertainment"
                  className="hover:text-purple-700"
                >
                  Events & Entertainment
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white py-6 px-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              From the Blog
            </h3>
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
                <p className="text-gray-500 text-sm">
                  No blog posts available.
                </p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

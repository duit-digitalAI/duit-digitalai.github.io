import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Choose the Right Personal Loan for Your Needs",
      excerpt: "Understanding the different types of personal loans and how to select the best option for your financial situation.",
      category: "Personal Finance",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "📊",
      featured: true
    },
    {
      title: "Loan Against Property: A Complete Guide",
      excerpt: "Everything you need to know about leveraging your property to get a loan with competitive interest rates.",
      category: "Property Loans",
      date: "March 12, 2025",
      readTime: "7 min read",
      image: "🏠"
    },
    {
      title: "Understanding CIBIL Score and Its Impact on Loan Approval",
      excerpt: "Learn how your credit score affects loan applications and ways to improve it for better approval chances.",
      category: "Credit Score",
      date: "March 10, 2025",
      readTime: "6 min read",
      image: "📈"
    },
    {
      title: "Top 5 Mistakes to Avoid When Applying for a Business Loan",
      excerpt: "Common pitfalls that entrepreneurs make when seeking business financing and how to avoid them.",
      category: "Business Finance",
      date: "March 8, 2025",
      readTime: "8 min read",
      image: "💼"
    },
    {
      title: "Digital Lending: The Future of Loan Processing in India",
      excerpt: "How technology is transforming the lending industry and making loan applications faster and more accessible.",
      category: "Fintech",
      date: "March 5, 2025",
      readTime: "4 min read",
      image: "🚀"
    },
    {
      title: "Emergency Loans: When and How to Use Them",
      excerpt: "A comprehensive guide to emergency loans, when they're appropriate, and how to apply for them quickly.",
      category: "Emergency Finance",
      date: "March 3, 2025",
      readTime: "5 min read",
      image: "⚡"
    }
  ];

  const categories = ["All", "Personal Finance", "Property Loans", "Credit Score", "Business Finance", "Fintech", "Emergency Finance"];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="px-8 py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Financial Education Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Expert insights, tips, and guides to help you make informed financial decisions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-gray-700 font-medium">Weekly Updates</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-gray-700 font-medium">Expert Authors</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm">
              <span className="text-gray-700 font-medium">Free Resources</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="px-8 py-8 border-b">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  index === 0 
                    ? 'bg-yellow-400 text-black' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Featured Article</h2>
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <div key={index} className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{post.title}</h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded transition">
                    Read Full Article
                  </button>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">{post.image}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{post.image}</div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-yellow-600 hover:text-yellow-700 font-semibold transition">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-8 py-16 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest financial insights and tips delivered to your inbox every week.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Popular Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Personal Loans", "Home Loans", "Credit Score", "Business Finance", "Investment Tips", "Tax Planning", "Insurance", "Saving Money"].map((topic, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-yellow-50 transition cursor-pointer">
                <span className="text-gray-700 font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 
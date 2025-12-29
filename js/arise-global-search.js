/**
 * Arise Machine Tools - Global Search Functionality
 * Handles the Navbar Search Bar and Product Data
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Product Database (Manual Index based on existing products)
    const productData = [
        { title: "Face Mill Cutters", category: "Milling", desc: "High-performance face mill cutters.", url: "products.html?search-target=Face%20Mill%20Cutters" },
        { title: "Carbide End Mill Cutters", category: "Milling", desc: "Solid carbide end mills.", url: "products.html?search-target=Carbide%20End%20Mill%20Cutters" },
        { title: "Carbide Ball Nose Cutter", category: "Milling", desc: "Precision ball nose cutters.", url: "products.html?search-target=Carbide%20Ball%20Nose%20Cutter" },
        { title: "Shell Mill Cutters", category: "Milling", desc: "High-quality shell mill cutters.", url: "products.html?search-target=Shell%20Mill%20Cutters" },
        { title: "Indexable Cutters", category: "Milling", desc: "Versatile indexable cutters.", url: "products.html?search-target=Indexable%20Cutters" },
        { title: "Precision Taps", category: "Drilling", desc: "High-quality tapping tools.", url: "products.html?search-target=Precision%20Taps" },
        { title: "High Speed Taps", category: "Drilling", desc: "Taps for high-speed operations.", url: "products.html?search-target=High%20Speed%20Taps" },
        { title: "Turning Tools", category: "Turning", desc: "General purpose turning tools.", url: "products.html?search-target=Turning%20Tools" },
        { title: "Carbide Cutting Tools", category: "Turning", desc: "Precision carbide cutting tools.", url: "products.html?search-target=Carbide%20Cutting%20Tools" },
        { title: "Advanced Cutting Tools", category: "Turning", desc: "High-performance cutting tools.", url: "products.html?search-target=Advanced%20Cutting%20Tools" },
        { title: "Boring Kit", category: "Boring", desc: "Complete boring tool kit.", url: "products.html?search-target=Boring%20Kit" },
        { title: "Boring Unit", category: "Boring", desc: "Precision boring unit.", url: "products.html?search-target=Boring%20Unit" },
        { title: "Combination Boring Bar", category: "Boring", desc: "Versatile combination boring bar.", url: "products.html?search-target=Combination%20Boring%20Bar" },
        { title: "Micro Boring Unit", category: "Boring", desc: "High-precision micro boring unit.", url: "products.html?search-target=Micro%20Boring%20Unit" },
        { title: "Adjustable Boring Head", category: "Boring", desc: "Adjustable head for boring operations.", url: "products.html?search-target=Adjustable%20Boring%20Head" },
        { title: "Combi Boring Bar", category: "Boring", desc: "Combination boring bar.", url: "products.html?search-target=Combi%20Boring%20Bar" },
        { title: "Finish Boring Head", category: "Boring", desc: "Head for finish boring operations.", url: "products.html?search-target=Finish%20Boring%20Head" },
        { title: "Rough Boring Head", category: "Boring", desc: "Head for rough boring operations.", url: "products.html?search-target=Rough%20Boring%20Head" },
        { title: "Tool Holding", category: "Tool Holding", desc: "Secure tool holding solutions.", url: "products.html?search-target=Tool%20Holding" },
        { title: "Adapters", category: "Tool Holding", desc: "High-quality tool adapters.", url: "products.html?search-target=Adapters" },
        { title: "Precision Adapters", category: "Tool Holding", desc: "Precision tool adapters.", url: "products.html?search-target=Precision%20Adapters" },
        { title: "Tooling Accessories", category: "Tool Holding", desc: "Essential tooling accessories.", url: "products.html?search-target=Tooling%20Accessories" },
        { title: "Tool Trolley", category: "Tool Holding", desc: "Organized tool storage trolley.", url: "products.html?search-target=Tool%20Trolley" },
        { title: "Tools Cupboard", category: "Tool Holding", desc: "Storage cupboard for tools.", url: "products.html?search-target=Tools%20Cupboard" },
        { title: "CBN Inserts", category: "Inserts", desc: "Cubic Boron Nitride inserts.", url: "products.html?search-target=CBN%20Inserts" },
        { title: "Carbide Inserts", category: "Inserts", desc: "High-performance carbide inserts.", url: "products.html?search-target=Carbide%20Inserts" },
        { title: "PCD Inserts", category: "Inserts", desc: "Polycrystalline Diamond inserts.", url: "products.html?search-target=PCD%20Inserts" }
    ];

    // 2. Elements
    const toggleBtn = document.getElementById('cncNavbarSearchToggle');
    const searchContainer = document.getElementById('cncNavbarSearchContainer');
    const searchInput = document.getElementById('cncNavbarSearchInput');
    const resultsContainer = document.getElementById('cncNavbarSearchResults');
    const closeBtn = document.getElementById('cncNavbarSearchClose');

    if (!toggleBtn || !searchContainer || !searchInput || !resultsContainer) return;

    // 3. Toggle Visibility
    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchContainer.classList.add('active');
        setTimeout(() => searchInput.focus(), 100);
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            searchContainer.classList.remove('active');
            searchInput.value = '';
            resultsContainer.innerHTML = '';
        });
    }

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (searchContainer.classList.contains('active') &&
            !searchContainer.contains(e.target) &&
            !toggleBtn.contains(e.target)) {
            searchContainer.classList.remove('active');
        }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchContainer.classList.contains('active')) {
            searchContainer.classList.remove('active');
        }
    });

    // 4. Search Logic
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query.length === 0) {
            resultsContainer.innerHTML = '';
            return;
        }

        const matches = productData.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.desc.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );

        renderNavbarResults(matches);
    });

    function renderNavbarResults(results) {
        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="cnc-navbar-no-results">No matches found.</div>';
            return;
        }

        const html = results.map(item => `
            <a href="${item.url}" class="cnc-navbar-search-item">
                <div class="cnc-navbar-search-info">
                    <div class="cnc-navbar-search-title">${item.title}</div>
                    <div class="cnc-navbar-search-desc">${item.desc}</div>
                </div>
                <span class="cnc-navbar-search-cat">${item.category}</span>
            </a>
        `).join('');

        resultsContainer.innerHTML = html;

        // Handle URL params on the products page itself if needed
        // If we really wanted to filter on *this* page without reload, we could check if we are on products.html
        // But the simple link approach is safer for "every page" request.
    }
});

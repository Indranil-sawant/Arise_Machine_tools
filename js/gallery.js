
document.addEventListener('DOMContentLoaded', function () {

    // Image Data Array
    const galleryImages = [
        {
            src: 'img/Advanced CNC Machining Facility.jpg',
            thumb: 'img/Advanced CNC Machining Facility.jpg',
            alt: 'Advanced CNC Machining Facility',
            category: 'facility'
        },
        {
            src: 'img/Precision Tool Grinding Setup.jpg',
            thumb: 'img/Precision Tool Grinding Setup.jpg',
            alt: 'Precision Tool Grinding Setup',
            category: 'facility'
        },
        {
            src: 'img/Quality Inspection & Metrology Lab.jpg',
            thumb: 'img/Quality Inspection & Metrology Lab.jpg',
            alt: 'Quality Inspection & Metrology Lab',
            category: 'facility'
        },
        {
            src: 'img/tools/Face_mill_cutters.jpg',
            thumb: 'img/tools/Face_mill_cutters.jpg',
            alt: 'High Performance Face Mill Cutters',
            category: 'products'
        },
        {
            src: 'img/tools/carbide_cutting_tools.jpg',
            thumb: 'img/tools/carbide_cutting_tools.jpg',
            alt: 'Solid Carbide Cutting Tools',
            category: 'products'
        },
        {
            src: 'img/tools/boring_tools.jpg',
            thumb: 'img/tools/boring_tools.jpg',
            alt: 'Precision Boring Tools',
            category: 'products'
        },
        {
            src: 'img/tools/adapters.jpg',
            thumb: 'img/tools/adapters.jpg',
            alt: 'Tool Holding Adapters',
            category: 'products'
        },
        {
            src: 'img/automotive.jpg',
            thumb: 'img/automotive.jpg',
            alt: 'Automotive Industry Machining',
            category: 'machining'
        },
        {
            src: 'img/robotics.jpg',
            thumb: 'img/robotics.jpg',
            alt: 'Robotics Component Manufacturing',
            category: 'machining'
        },
        {
            src: 'img/Inventory, Storage & Dispatch Unit.jpg',
            thumb: 'img/Inventory, Storage & Dispatch Unit.jpg',
            alt: 'Inventory & Dispatch Unit',
            category: 'facility'
        },
        {
            src: 'img/tools/turning_tools.jpg',
            thumb: 'img/tools/turning_tools.jpg',
            alt: 'CNC Turning Tools',
            category: 'products'
        },
        {
            src: 'img/section2.webp',
            thumb: 'img/section2.webp',
            alt: 'Precision Machined Components',
            category: 'machining'
        }
    ];

    const galleryGrid = document.querySelector('.cnc-gallery-grid');
    const filterBtns = document.querySelectorAll('.cnc-gallery-filter-btn');

    // Function to render images
    function renderGallery(filter = 'all') {
        // Clear current grid
        galleryGrid.innerHTML = '';

        // Filter images
        const filteredImages = filter === 'all'
            ? galleryImages
            : galleryImages.filter(img => img.category.toLowerCase() === filter.toLowerCase());

        // Animate grid clearing (optional, simply replacing HTML for now)

        filteredImages.forEach(img => {
            const item = document.createElement('div');
            item.className = 'cnc-gallery-item animate__animated animate__fadeIn';
            // Add data attribute for category if needed for CSS based filtering, 
            // but we're doing DOM manipulation here.

            item.innerHTML = `
                <img src="${img.src}" alt="${img.alt}" class="cnc-gallery-image" loading="lazy">
                <a href="${img.src}" data-lightbox="gallery" data-title="${img.alt}" class="cnc-gallery-overlay">
                    <div class="cnc-gallery-icon">
                        <i class="fas fa-plus"></i>
                    </div>
                    <div class="cnc-gallery-caption">
                        <h6>${img.alt}</h6>
                    </div>
                </a>
            `;

            galleryGrid.appendChild(item);
        });
    }

    // Initial Render
    renderGallery('all');

    // Filter Click Events
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            this.classList.add('active');

            // Get filter value
            const filterValue = this.textContent.trim().toLowerCase();

            // Render
            renderGallery(filterValue === 'all' ? 'all' : filterValue);
        });
    });

});

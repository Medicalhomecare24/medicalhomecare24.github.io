<script>
    const toggle = document.getElementById("nav-toggle");
    const mobileMenu = document.getElementById("mobile-nav");

    if (toggle && mobileMenu) {
        toggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("show");
            
            const icon = toggle.querySelector("ion-icon");
            if (mobileMenu.classList.contains("show")) {
                icon.setAttribute("name", "close-outline");
            } else {
                icon.setAttribute("name", "menu-outline");
            }
        });
    }
</script>
function insertHeader() {
    const content = document.getElementById('content');

    const header = `
        <header class="header">
            <div class="grid">
                <div class="logo">
                    <a class="logo--text" href="index.html">Forwwward</a>
                </div>

                <!--Menu-->
                <div class="menu">
                    <div class="menu__line"></div>
                    <div class="menu__line"></div>
                </div>
            </div>

        

            <!--Navigation-->
            <nav class="nav">
                <div class="close">
                    <div class="close__line"></div>
                    <div class="close__line"></div>
                </div>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Studio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div class="logo--menu">
                    <!-- <img src="../src/images/svg/logo.svg" alt="Forwwward Logo">
                    <img src="../src/images/svg/arrow-right-long-solid.svg" alt="Arrow Right"> -->
                </div>

                <div class="copy">
                    <p class="copy--text">Forwwward Studio &copy; Copyright</p>
                    <p class="copy--text">Cookie Policy</p>
                    <p class="copy--text">Privacy Policy</p>
                </div>
        </nav>
    </header>`;
    content.insertAdjacentHTML('afterbegin', header);
};

export default insertHeader;
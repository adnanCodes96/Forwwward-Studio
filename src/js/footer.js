function insertFooter(){
    const content = document.getElementById('content');

    const footer = `
        <footer class="footer">
            <div class="grid">
                <div class="grid__item grid__item--1">
                    <div class="logo">
                        <a class="logo--text" href="index.html">Forwwward</a>
                    </div>

                    <div class="general-inquires">
                        <p class="text--secondary">General Inquires</p>
                        <a class="email" href="mailto:#">hello@forwwward.studio</a>
                    </div>
                </div>
                <div class="grid__item grid__item--2">
                    <p class="text--secondary">Location: <span>worldwide</span></p>
                </div>
                <div class="grid__item grid__item--3">
                    <p class="text--primary">Forwwward Studio © Copyright</p>
                </div>
            </div>
        </footer>
    `;

    content.insertAdjacentHTML('afterend', footer);

};

export default insertFooter;
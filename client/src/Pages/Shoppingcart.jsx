import React from 'react'
import { useHistory } from "react-router-dom";


function Shoppingcart() {
    const history = useHistory();

    return (
        <div className="wrapper">
            <header className ="navContainer">
            <i id="backArrow" class="fas fa-arrow-left" aria-hidden="true"></i>
            <h1 onClick={ () => history.push("/") } className ="profileTitle">bopshop.</h1>
            <i className="fas fa-user-circle" id ="userCircle" onClick={() => history.push("/profile")}></i>
            </header>

            <div className="cartContainer">
            <h1 className="cartTitle">your cart.</h1>
            </div>

            <div className="itemContainer">

                <div className="item">
                    <img className="itemPic" src="./src/Rectangle.png"></img>
                    <p className="cartText">manchester jacket.</p>
                    <p className="cartRef">ref:a31241243</p>
                    <p className="priceTag">$29.00</p>
                    
                    <svg id ="removeIcon" width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.86645 1.19549L4.19129 0.52034L2.50329 2.20834L0.81529 0.52034L0.140137 1.19549L1.82814 2.88349L0.140137 4.5715L0.81529 5.24665L2.50329 3.55865L4.19129 5.24665L4.86645 4.5715L3.17844 2.88349L4.86645 1.19549Z" fill="#CDCDCD"/>
                    </svg>

                    <svg id ="colorIcon" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.43122" cy="6.50869" r="6.43379" fill="#C5B7AE"/>
                    </svg>

                    <svg id="sizeIcon"width="7" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.208754 0.718626V5.99402H1.12577V2.36203H1.17471L2.63265 5.97856H3.31784L4.77578 2.36976H4.82472V5.99402H5.74173V0.718626H4.57229L3.00616 4.54122H2.94433L1.3782 0.718626H0.208754Z" fill="white"/>
                    </svg>
                </div>   

                <div className="item">
                    <img className="itemPic" src="./src/Rectangle.png"></img>
                    <p className="cartText">manchester jacket.</p>
                    <p className="cartRef">ref:a31241243</p>
                    <p className="priceTag">$29.00</p>
                    <svg id ="removeIcon" width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.86645 1.19549L4.19129 0.52034L2.50329 2.20834L0.81529 0.52034L0.140137 1.19549L1.82814 2.88349L0.140137 4.5715L0.81529 5.24665L2.50329 3.55865L4.19129 5.24665L4.86645 4.5715L3.17844 2.88349L4.86645 1.19549Z" fill="#CDCDCD"/>
                    </svg>

                    <svg id ="colorIcon" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.43122" cy="6.50869" r="6.43379" fill="#C5B7AE"/>
                    </svg>

                    <svg id="sizeIcon"width="7" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.208754 0.718626V5.99402H1.12577V2.36203H1.17471L2.63265 5.97856H3.31784L4.77578 2.36976H4.82472V5.99402H5.74173V0.718626H4.57229L3.00616 4.54122H2.94433L1.3782 0.718626H0.208754Z" fill="white"/>
                    </svg>
                </div>           
                <div className="item">
                    <img className="itemPic" src="./src/Rectangle.png"></img>
                    <p className="cartText">manchester jacket.</p>
                    <p className="cartRef">ref:a31241243</p>
                    <p className="priceTag">$29.00</p>
                    <svg id ="removeIcon" width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.86645 1.19549L4.19129 0.52034L2.50329 2.20834L0.81529 0.52034L0.140137 1.19549L1.82814 2.88349L0.140137 4.5715L0.81529 5.24665L2.50329 3.55865L4.19129 5.24665L4.86645 4.5715L3.17844 2.88349L4.86645 1.19549Z" fill="#CDCDCD"/>
                    </svg>

                    <svg id ="colorIcon" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.43122" cy="6.50869" r="6.43379" fill="#C5B7AE"/>
                    </svg>

                    <svg id="sizeIcon"width="7" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.208754 0.718626V5.99402H1.12577V2.36203H1.17471L2.63265 5.97856H3.31784L4.77578 2.36976H4.82472V5.99402H5.74173V0.718626H4.57229L3.00616 4.54122H2.94433L1.3782 0.718626H0.208754Z" fill="white"/>
                    </svg>
                </div> 

                <svg id="greyBar" width="47" height="1" viewBox="0 0 47 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="47" height="1" transform="matrix(1 0 0 -1 0 1)" fill="black" fill-opacity="0.16"/>
                </svg>

                <p id="totalText">cart subtotal.</p>
                <svg id="totalSum"width="116" height="28" viewBox="0 0 116 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.96045 27.7742H10.5179L10.5396 25.2709C15.2319 24.9133 17.9519 22.4209 17.9627 18.6605C17.9519 14.9652 15.1669 13.0038 11.309 12.1368L10.6696 11.9851L10.713 6.56678C12.1543 6.90272 13.032 7.82384 13.1621 9.18926H17.6593C17.6051 5.60232 14.9284 3.03402 10.7563 2.57888L10.778 0.0322568H8.22053L8.19886 2.55721C3.96171 2.969 0.970787 5.52646 0.99246 9.22177C0.981624 12.4945 3.28984 14.3692 7.03934 15.2686L8.07966 15.5287L8.02547 21.2613C6.25909 20.9254 5.06706 19.8417 4.94785 18.032H0.407279C0.515646 22.41 3.38737 24.8591 7.98213 25.2601L7.96045 27.7742ZM10.5829 21.2613L10.6263 16.2006C12.306 16.7316 13.2163 17.4143 13.2271 18.6497C13.2163 19.9609 12.2193 20.9362 10.5829 21.2613ZM8.11217 11.3241C6.75758 10.8581 5.78228 10.1537 5.80395 8.90751C5.80395 7.74798 6.62754 6.84854 8.15552 6.53427L8.11217 11.3241ZM35.2659 2.80645H30.8554L25.3611 6.28503V10.4463L30.4436 7.26033H30.5736V25H35.2659V2.80645ZM48.9755 2.80645H44.565L39.0708 6.28503V10.4463L44.1532 7.26033H44.2832V25H48.9755V2.80645ZM61.3088 25.3034C66.3154 25.3034 69.9132 22.6268 69.924 19.029C69.9132 16.2548 67.7784 13.9899 65.1125 13.5456V13.3939C67.4316 12.9171 69.0896 10.9123 69.1004 8.47404C69.0896 5.03881 65.7952 2.50302 61.3088 2.50302C56.8116 2.50302 53.5173 5.03881 53.5281 8.47404C53.5173 10.9015 55.1536 12.9171 57.516 13.3939V13.5456C54.8068 13.9899 52.6937 16.2548 52.7045 19.029C52.6937 22.6268 56.3023 25.3034 61.3088 25.3034ZM61.3088 21.8574C59.0765 21.8574 57.581 20.5353 57.581 18.6605C57.581 16.7424 59.1523 15.3553 61.3088 15.3553C63.4545 15.3553 65.0367 16.7424 65.0367 18.6605C65.0367 20.5461 63.5304 21.8574 61.3088 21.8574ZM61.3088 11.9418C59.4341 11.9418 58.1012 10.7172 58.1012 8.96169C58.1012 7.22782 59.4124 6.03579 61.3088 6.03579C63.1944 6.03579 64.5165 7.23866 64.5165 8.96169C64.5165 10.7172 63.1728 11.9418 61.3088 11.9418ZM74.1 25.2818C75.4871 25.2818 76.69 24.1222 76.7008 22.6809C76.69 21.2613 75.4871 20.1018 74.1 20.1018C72.6696 20.1018 71.4884 21.2613 71.4992 22.6809C71.4884 24.1222 72.6696 25.2818 74.1 25.2818ZM78.8911 21.0988H89.5435V25H94.0299V21.0988H96.7824V17.3385H94.0299V2.80645H88.1564L78.8911 17.4035V21.0988ZM89.6302 17.3385H83.6159V17.1651L89.4568 7.92137H89.6302V17.3385ZM106.967 25.3034C111.974 25.3034 115.572 22.6268 115.583 19.029C115.572 16.2548 113.437 13.9899 110.771 13.5456V13.3939C113.09 12.9171 114.748 10.9123 114.759 8.47404C114.748 5.03881 111.454 2.50302 106.967 2.50302C102.47 2.50302 99.1758 5.03881 99.1867 8.47404C99.1758 10.9015 100.812 12.9171 103.175 13.3939V13.5456C100.465 13.9899 98.3522 16.2548 98.3631 19.029C98.3522 22.6268 101.961 25.3034 106.967 25.3034ZM106.967 21.8574C104.735 21.8574 103.24 20.5353 103.24 18.6605C103.24 16.7424 104.811 15.3553 106.967 15.3553C109.113 15.3553 110.695 16.7424 110.695 18.6605C110.695 20.5461 109.189 21.8574 106.967 21.8574ZM106.967 11.9418C105.093 11.9418 103.76 10.7172 103.76 8.96169C103.76 7.22782 105.071 6.03579 106.967 6.03579C108.853 6.03579 110.175 7.23866 110.175 8.96169C110.175 10.7172 108.831 11.9418 106.967 11.9418Z" fill="black"/>
                </svg>

                <svg id ="blackBar" width="329" height="59" viewBox="0 0 329 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="329" height="59" rx="29.5" fill="black"/>
                <path d="M87.7559 27.4375C87.432 24.75 85.398 23.2045 82.7048 23.2045C79.6309 23.2045 77.2843 25.375 77.2843 29.1818C77.2843 32.9773 79.5911 35.1591 82.7048 35.1591C85.6877 35.1591 87.4889 33.1761 87.7559 31.0341L85.2673 31.0227C85.0343 32.267 84.057 32.983 82.7445 32.983C80.9775 32.983 79.7786 31.6705 79.7786 29.1818C79.7786 26.7614 80.9605 25.3807 82.7616 25.3807C84.1082 25.3807 85.0798 26.1591 85.2673 27.4375H87.7559ZM92.7778 35.1705C95.4256 35.1705 97.0733 33.358 97.0733 30.6705C97.0733 27.9659 95.4256 26.1591 92.7778 26.1591C90.1301 26.1591 88.4824 27.9659 88.4824 30.6705C88.4824 33.358 90.1301 35.1705 92.7778 35.1705ZM92.7892 33.2955C91.5676 33.2955 90.9426 32.1761 90.9426 30.6534C90.9426 29.1307 91.5676 28.0057 92.7892 28.0057C93.9881 28.0057 94.6131 29.1307 94.6131 30.6534C94.6131 32.1761 93.9881 33.2955 92.7892 33.2955ZM100.428 29.9545C100.433 28.8295 101.104 28.1705 102.081 28.1705C103.053 28.1705 103.638 28.8068 103.632 29.875V35H106.053V29.4432C106.053 27.4091 104.859 26.1591 103.041 26.1591C101.746 26.1591 100.808 26.7955 100.416 27.8125H100.314V26.2727H98.0072V35H100.428V29.9545ZM111.962 26.2727H110.32V24.1818H107.9V26.2727H106.707V28.0909H107.9V32.6364C107.888 34.3466 109.053 35.1932 110.809 35.1193C111.434 35.0966 111.877 34.9716 112.121 34.892L111.741 33.0909C111.621 33.1136 111.366 33.1705 111.138 33.1705C110.656 33.1705 110.32 32.9886 110.32 32.3182V28.0909H111.962V26.2727ZM112.899 35H115.319V26.2727H112.899V35ZM114.115 25.1477C114.837 25.1477 115.427 24.5966 115.427 23.9205C115.427 23.25 114.837 22.6989 114.115 22.6989C113.399 22.6989 112.808 23.25 112.808 23.9205C112.808 24.5966 113.399 25.1477 114.115 25.1477ZM119.039 29.9545C119.045 28.8295 119.715 28.1705 120.692 28.1705C121.664 28.1705 122.249 28.8068 122.243 29.875V35H124.664V29.4432C124.664 27.4091 123.471 26.1591 121.653 26.1591C120.357 26.1591 119.42 26.7955 119.028 27.8125H118.925V26.2727H116.618V35H119.039V29.9545ZM131.528 31.2841C131.534 32.4545 130.733 33.0682 129.863 33.0682C128.949 33.0682 128.358 32.4261 128.352 31.3977V26.2727H125.932V31.8295C125.937 33.8693 127.13 35.1136 128.886 35.1136C130.199 35.1136 131.142 34.4375 131.534 33.4148H131.625V35H133.949V26.2727H131.528V31.2841ZM139.222 35.1705C141.381 35.1705 142.836 34.1193 143.176 32.5L140.938 32.3523C140.694 33.017 140.069 33.3636 139.262 33.3636C138.051 33.3636 137.284 32.5625 137.284 31.2614V31.2557H143.228V30.5909C143.228 27.625 141.432 26.1591 139.125 26.1591C136.557 26.1591 134.892 27.983 134.892 30.6761C134.892 33.4432 136.534 35.1705 139.222 35.1705ZM137.284 29.7557C137.336 28.7614 138.091 27.9659 139.165 27.9659C140.216 27.9659 140.944 28.7159 140.949 29.7557H137.284ZM151.872 26.2727H150.23V24.1818H147.81V26.2727H146.617V28.0909H147.81V32.6364C147.798 34.3466 148.963 35.1932 150.719 35.1193C151.344 35.0966 151.787 34.9716 152.031 34.892L151.651 33.0909C151.531 33.1136 151.276 33.1705 151.048 33.1705C150.566 33.1705 150.23 32.9886 150.23 32.3182V28.0909H151.872V26.2727ZM156.658 35.1705C159.306 35.1705 160.954 33.358 160.954 30.6705C160.954 27.9659 159.306 26.1591 156.658 26.1591C154.011 26.1591 152.363 27.9659 152.363 30.6705C152.363 33.358 154.011 35.1705 156.658 35.1705ZM156.67 33.2955C155.448 33.2955 154.823 32.1761 154.823 30.6534C154.823 29.1307 155.448 28.0057 156.67 28.0057C157.869 28.0057 158.494 29.1307 158.494 30.6534C158.494 32.1761 157.869 33.2955 156.67 33.2955ZM168.894 35.1705C171.218 35.1705 172.678 33.8068 172.792 31.8011H170.508C170.366 32.733 169.752 33.2557 168.923 33.2557C167.792 33.2557 167.059 32.3068 167.059 30.6364C167.059 28.9886 167.798 28.0455 168.923 28.0455C169.809 28.0455 170.377 28.6307 170.508 29.5H172.792C172.69 27.483 171.161 26.1591 168.883 26.1591C166.235 26.1591 164.599 27.9943 164.599 30.6705C164.599 33.3239 166.207 35.1705 168.894 35.1705ZM176.122 29.9545C176.128 28.8295 176.815 28.1705 177.804 28.1705C178.787 28.1705 179.366 28.8011 179.361 29.875V35H181.781V29.4432C181.787 27.3977 180.582 26.1591 178.764 26.1591C177.44 26.1591 176.554 26.7841 176.156 27.8125H176.054V23.3636H173.702V35H176.122V29.9545ZM187.023 35.1705C189.182 35.1705 190.637 34.1193 190.978 32.5L188.739 32.3523C188.495 33.017 187.87 33.3636 187.063 33.3636C185.853 33.3636 185.086 32.5625 185.086 31.2614V31.2557H191.029V30.5909C191.029 27.625 189.233 26.1591 186.927 26.1591C184.358 26.1591 182.694 27.983 182.694 30.6761C182.694 33.4432 184.336 35.1705 187.023 35.1705ZM185.086 29.7557C185.137 28.7614 185.893 27.9659 186.966 27.9659C188.018 27.9659 188.745 28.7159 188.75 29.7557H185.086ZM195.912 35.1705C198.235 35.1705 199.696 33.8068 199.809 31.8011H197.525C197.383 32.733 196.77 33.2557 195.94 33.2557C194.809 33.2557 194.076 32.3068 194.076 30.6364C194.076 28.9886 194.815 28.0455 195.94 28.0455C196.826 28.0455 197.395 28.6307 197.525 29.5H199.809C199.707 27.483 198.179 26.1591 195.9 26.1591C193.253 26.1591 191.616 27.9943 191.616 30.6705C191.616 33.3239 193.224 35.1705 195.912 35.1705ZM200.719 35H203.139V32.2273L203.793 31.483L206.174 35H209.009L205.605 30.0511L208.844 26.2727H206.066L203.27 29.5852H203.139V23.3636H200.719V35ZM212.975 35.1705C215.623 35.1705 217.271 33.358 217.271 30.6705C217.271 27.9659 215.623 26.1591 212.975 26.1591C210.328 26.1591 208.68 27.9659 208.68 30.6705C208.68 33.358 210.328 35.1705 212.975 35.1705ZM212.987 33.2955C211.765 33.2955 211.14 32.1761 211.14 30.6534C211.14 29.1307 211.765 28.0057 212.987 28.0057C214.186 28.0057 214.811 29.1307 214.811 30.6534C214.811 32.1761 214.186 33.2955 212.987 33.2955ZM223.801 31.2841C223.807 32.4545 223.006 33.0682 222.136 33.0682C221.222 33.0682 220.631 32.4261 220.625 31.3977V26.2727H218.205V31.8295C218.21 33.8693 219.404 35.1136 221.159 35.1136C222.472 35.1136 223.415 34.4375 223.807 33.4148H223.898V35H226.222V26.2727H223.801V31.2841ZM232.16 26.2727H230.518V24.1818H228.097V26.2727H226.904V28.0909H228.097V32.6364C228.086 34.3466 229.251 35.1932 231.006 35.1193C231.631 35.0966 232.075 34.9716 232.319 34.892L231.938 33.0909C231.819 33.1136 231.563 33.1705 231.336 33.1705C230.853 33.1705 230.518 32.9886 230.518 32.3182V28.0909H232.16V26.2727ZM246.223 35.6364L251.95 29.9091L246.223 24.1818L244.905 25.4943L248.365 28.9489H240.257V30.8693H248.365L244.905 34.3295L246.223 35.6364Z" fill="white"/>
                </svg>
                
                <svg id="thinBar" width="134" height="5" viewBox="0 0 134 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="134" height="5" rx="2.5" fill="black"/>
                </svg>

  
            </div>
        
    </div>


        
    )
}


export default Shoppingcart
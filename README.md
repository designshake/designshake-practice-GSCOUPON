/* 화면 너비가 0 ~ 1280px : 데스크탑 */
        @media (max-width: 1280px){
            body {background: #880e4f;}
            h1::before {content: '2. '}
            h1::after {content: ' - 1025px ~ 1280px'}
        }

        /* 화면 너비가 0 ~ 1024px : 데스크탑 */
        @media (max-width: 1024px){
            body {background: #4a148c;}
            h1::before {content: '3. '}
            h1::after {content: ' - 961px ~ 1024px'}
        }

        /* 화면 너비가 0 ~ 960px : 노트북 */
        @media (max-width: 960px){
            body {background: #311b92;}
            h1::before {content: '4. '}
            h1::after {content: ' - 769px ~ 960px'}
        }

        /* 화면 너비가 0 ~ 768 : 타블렛 */
        @media (max-width: 768px){
            body {background: #4a148c;}
            h1::before {content: '5. '}
            h1::after {content: ' - 577px ~ 768px'}
        }

        /* 화면 너비가 0 ~ 576 : 모바일 */
        @media (max-width: 576px){
            body {background: #004D40;}
            h1::before {content: '6. '}
            h1::after {content: ' - 0px ~ 576px'}
        }
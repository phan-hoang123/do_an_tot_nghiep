// .textLetter text h2
        let indexText = 0;
        let textLetter = document.querySelector('.textLetter h2');
        const textLetterH2 = "Gửi cậu!";
        let timoutTextLetter;

        function textCharLetter() {
            if (indexText < textLetterH2.length) {
                textLetter.textContent += textLetterH2[indexText];
                indexText++;
                setTimeout(indexText, 100);
            }
            else {
                clearInterval(timoutTextLetter);
                setTimeout(() => {
                    funcTimeoutLetterContent()
                }, 500)
            }
        }
        function funcTimeoutLetter() {
            indexText = 0; // Reset indexText
            textLetter.textContent = ''; // Xóa nội dung hiện tại của textLetter
            clearInterval(timoutTextLetter);
            timoutTextLetter = setInterval(() => {
                textCharLetter();
            }, 200)
        }

        // chữ của thư bạn muốn gửi
        let indexTextContent = 0;
        let textLetterContent = document.querySelector('.contentLetter');
        const textLetterP = "Hôm nay là ngày 20/10. Xin gửi lời chúc tới người tớ yêu thương nhất. Luôn vui vẻ, luôn hạnh phúc và luôn may mắn trong cuộc sống, ngày càng xinh đẹp. Xin gửi tất cả lời chúc tốt đẹp đến với cậu. Love You💗";
        let timoutTextLetterContent;
        function textCharLetterContent() {
            if (indexTextContent < textLetterP.length) {
                textLetterContent.textContent += textLetterP[indexTextContent];
                indexTextContent++;
                setTimeout(indexTextContent, 1);
            }
            else {
                clearInterval(timoutTextLetterContent)

            }
        }
        function funcTimeoutLetterContent() {
            indexTextContent = 0; // Reset indexTextContent
            textLetterContent.textContent = ''; // Xóa nội dung hiện tại của textLetter
            clearInterval(timoutTextLetterContent);
            timoutTextLetterContent = setInterval(() => {
                textCharLetterContent();
            }, 100)
        }
        $(document).ready(function () {
            $('.valentines').mouseenter(function () {
                $('.card').stop().animate({
                    top: '-90px'
                }, 'slow');
            }).mouseleave(function () {
                $('.card').stop().animate({
                    top: 0
                }, 'slow');
            });

            $('.card').click(function () {
                $('.box-content').addClass('active');
                $(".wrapperLetterForm").fadeIn()
                funcTimeoutLetter();
            });

            $('.fa-xmark').click(function () {
                $('.wrapperLetterForm').css('display', 'none');
            });
        });
        var leafOne = document.querySelector('.leafOne');
        var stickLine = document.querySelector('.stickLine');
        var leafTwo = document.querySelector('.leafTwo');
        var leafS1 = document.querySelector('.leafS1');
        var rose1 = document.querySelector('.rose1');
        var rose2 = document.querySelector('.rose2');
        var rose3 = document.querySelector('.rose3');
        var rose4 = document.querySelector('.rose4');

        var lineDrawing = anime({
            targets: [leafOne, stickLine, leafTwo, leafS1, rose1, rose2, rose3, rose4],
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutCubic',
            duration: 4000,
            begin: function (anim) {
                //Leaf One
                leafOne.setAttribute("stroke", "black");
                leafOne.setAttribute("fill", "none");
                // Leaf Two
                leafTwo.setAttribute("stroke", "black");
                leafTwo.setAttribute("fill", "none");
                //Stick
                stickLine.setAttribute("stroke", "black");
                stickLine.setAttribute("fill", "none");
                // Leaf S1
                leafS1.setAttribute("stroke", "black");
                leafS1.setAttribute("fill", "none");
                //Rose One
                rose1.setAttribute("stroke", "black");
                rose1.setAttribute("fill", "none");
                //Rose Two
                rose2.setAttribute("stroke", "black");
                rose2.setAttribute("fill", "none");
                //Rose Three
                rose3.setAttribute("stroke", "black");
                rose3.setAttribute("fill", "none");
                //Rose Three
                rose4.setAttribute("stroke", "black");
                rose4.setAttribute("fill", "none");
            },
            complete: function (anim) {
                //Leaf One
                leafOne.setAttribute("fill", "#9CDD05");
                leafOne.setAttribute("stroke", "none");
                //Leaf Two 
                leafTwo.setAttribute("fill", "#9CDD05");
                leafTwo.setAttribute("stroke", "none");
                //Stick
                stickLine.setAttribute("fill", "#83AA2E");
                stickLine.setAttribute("stroke", "none");
                // Leaf S1
                leafS1.setAttribute("fill", "#9CDD05");
                leafS1.setAttribute("stroke", "none");
                // Rose 1
                rose1.setAttribute("fill", "#F37D79");
                rose1.setAttribute("stroke", "none");
                // Rose 2
                rose2.setAttribute("fill", "#D86666");
                rose2.setAttribute("stroke", "none");
                // Rose 3
                rose3.setAttribute("fill", "#F37D79");
                rose3.setAttribute("stroke", "none");
                // Rose 3
                rose4.setAttribute("fill", "#D86666");
                rose4.setAttribute("stroke", "none");
            },
            autoplay: true,
        });
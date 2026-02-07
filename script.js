document.addEventListener('DOMContentLoaded', () => {
    
    
    const feedContainer = document.getElementById('feed-container');

   
    feedContainer.addEventListener('click', (event) => {
        const target = event.target;

        
        const likeBtn = target.closest('.like');
        
        if (likeBtn) {
         
            likeBtn.classList.toggle('active');
            
            const icon = likeBtn.querySelector('i');
            const countSpan = likeBtn.querySelector('.count');
       
            let currentCount = parseInt(countSpan.innerText.replace('K', '000').replace(',', '')) || 0;

            if (likeBtn.classList.contains('active')) {
                
                icon.classList.remove('far'); 
                icon.classList.add('fas');    
                icon.style.color = "#f91880";
                countSpan.style.color = "#f91880";
                countSpan.innerText = currentCount + 1;
            } else {
               
                icon.classList.remove('fas'); 
                icon.classList.add('far');    
                icon.style.color = "";        
                countSpan.style.color = "";   
                countSpan.innerText = Math.max(0, currentCount - 1);
            }
        }

      
        const retweetBtn = target.closest('.retweet');

        if (retweetBtn) {
            retweetBtn.classList.toggle('active');
            
            const icon = retweetBtn.querySelector('i');
            const countSpan = retweetBtn.querySelector('.count');
            
            let currentCount = parseInt(countSpan.innerText.replace('K', '000').replace(',', '')) || 0;

            if (retweetBtn.classList.contains('active')) {
              
                icon.style.color = "#00ba7c";
                countSpan.style.color = "#00ba7c";
                countSpan.innerText = currentCount + 1;
            } else {
                
                icon.style.color = "";
                countSpan.style.color = "";
                countSpan.innerText = Math.max(0, currentCount - 1);
            }
        }

       
        const commentBtn = target.closest('.comment');

        if (commentBtn) {
           
            alert("Comment section would open here!");
        }

    });
});
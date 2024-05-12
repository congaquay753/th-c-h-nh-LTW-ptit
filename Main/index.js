document.addEventListener('DOMContentLoaded', function() {
    const headerContent = document.querySelector('.header-content');
    const h1 = headerContent.querySelector('h1');
    const h3 = headerContent.querySelector('h3');
    const p = headerContent.querySelector('p');
    const form = headerContent.querySelector('form');
    const button = form.querySelector('button');
  
    // Hiệu ứng làm nổi bật tiêu đề
    h1.classList.add('highlight');
  
    // Hiệu ứng làm mờ dần nội dung
    setTimeout(() => {
      h3.classList.add('fade-in');
      p.classList.add('fade-in');
      form.classList.add('fade-in');
    }, 500); // Bắt đầu sau 500ms
  
    // Hiệu ứng cho nút "Get Started"
    button.addEventListener('mouseover', () => {
      button.classList.add('hover');
    });
    button.addEventListener('mouseout', () => {
      button.classList.remove('hover');
    });
  });

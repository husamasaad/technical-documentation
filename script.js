



// adding Copy button for each code sample
previews = document.querySelectorAll('pre')

  previews.forEach(pre => {
      let copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn'
      copyBtn.innerHTML = '<img src="./copy.svg" alt="copy code"></img>';

      copyBtn.addEventListener('click', () => {
          let codeText = pre.querySelector('code').textContent
          navigator.clipboard.writeText(codeText)
          copyBtn.innerHTML = "Copied !"
          copyBtn.onblur = () => {
            copyBtn.innerHTML = '<img src="./copy.svg" alt="copy code"></img>';
          }
      })
      pre.appendChild(copyBtn)
  });
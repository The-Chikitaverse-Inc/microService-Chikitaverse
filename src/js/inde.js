window.onload = () => {
        if (!localStorage.getItem('reloaded')) {
          localStorage.setItem('reloaded', 'true');
          location.reload();
        } else {
          localStorage.removeItem('reloaded');
        }
      }
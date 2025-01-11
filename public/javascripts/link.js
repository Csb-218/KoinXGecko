document.addEventListener('DOMContentLoaded', () => {
    const all_deviation_button = document.getElementById('get-all-deviations');
    if (all_deviation_button) {
        all_deviation_button.addEventListener('click', () => {
        window.location.href = '/api/deviation';
      });
    }

    const all_stats_button = document.getElementById('get-all-stats');
    if (all_stats_button) {
        all_stats_button.addEventListener('click', () => {
        window.location.href = '/api/stats';
      });
    }

    const req_url = document.getElementById("code-coin")



    const form = document.getElementById("getcoin")
    const coin = document.getElementById('coin')
    coin.addEventListener(
        'input',(e)=>{
            e.preventDefault()
            coin.value = e.target.value
            req_url.innerText =  e.target.value
        }
    )
    if (form) {
        form.addEventListener('submit', (event) => {

            event.preventDefault();

            if(form.querySelector('#get-stat-coin')){
                window.location.href = `/api/stats?coin=${coin.value}`;
            }
            else{
                window.location.href = `/api/deviation?coin=${coin.value}`;
            }

          });
      };
    }

    
)

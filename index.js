document
        .getElementById("download-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const url = document.getElementById("url").value;

          fetch(
            `https://api.tiklydown.eu.org/api/download/v3?url=${encodeURIComponent(
              url
            )}`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.status === 200) {
                const result = data.result;
                document.getElementById("video-link").href = result.video;
                document.getElementById("music-link").href = result.music;

                const videoResult = document.getElementById("video-result");
                videoResult.src = result.video;
                videoResult.classList.remove("hidden");

                document.getElementById("result").classList.remove("hidden");
              } else {
                alert(
                  "Failed to fetch download links. Please check the URL and try again."
                );
              }
            })
            .catch((error) => {
              console.error("Error:", error);
              alert("An error occurred. Please try again.");
            });
        });

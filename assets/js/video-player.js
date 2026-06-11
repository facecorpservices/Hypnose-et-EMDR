document.querySelectorAll("[data-youtube-id]").forEach((launcher) => {
  launcher.addEventListener("click", () => {
    const videoId = launcher.dataset.youtubeId;
    const start = launcher.dataset.start ? `&start=${launcher.dataset.start}` : "";
    const title = launcher.dataset.title || "Vidéo YouTube";
    const origin = window.location.origin && window.location.origin !== "null"
      ? `&origin=${encodeURIComponent(window.location.origin)}`
      : "";
    const iframe = document.createElement("iframe");

    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0${start}${origin}`;
    iframe.title = title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";

    const wrapper = document.createElement("div");
    wrapper.className = "video-frame";
    wrapper.appendChild(iframe);
    launcher.replaceWith(wrapper);
  });
});

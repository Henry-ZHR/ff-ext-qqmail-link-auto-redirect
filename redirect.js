const url = new URL(window.location);
const targetUrl = url.searchParams.get("gourl");
if (targetUrl != null) {
  window.location.replace(targetUrl);
}
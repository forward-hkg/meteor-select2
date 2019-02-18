Package.describe({
  name: "akora:select2",
  summary: "Select2 is a jQuery based replacement for select boxes.",
  version: "4.0.6-rc.1",
  git: "https://github.com/forward-hkg/meteor-select2"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use("jquery", "client");

  api.add_files([
    "lib/select2/dist/js/select2.js"
  ], "client", { bare: true });

  api.add_files([
    "lib/select2/dist/css/select2.css"
  ], "client");
});

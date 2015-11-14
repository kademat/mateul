using System.Web.Optimization;

namespace jstcode
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/main/jquery-1.11.3.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/main/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/main/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/animateHighlight").Include(
                "~/Scripts/main/mineHovers.js",
                "~/Scripts/main/quotes.js",
                "~/Scripts/main/wow.js",
                "~/Scripts/main/shCore.js",
                "~/Scripts/main/shBrushJScript.js",
                "~/Scripts/main/shBrushCss.js",
                "~/Scripts/main/shBrushCSharp.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                  "~/Scripts/main/bootstrap.js",
                  "~/Scripts/main/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/tocify").Include(
                        "~/Scripts/main/jquery-ui.js",
                        "~/Scripts/main/jquery.tocify.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/site.css",
                "~/Content/tableOfContents.css",
                "~/Content/animate.css",
                "~/Content/shThemeDefault.css",
                "~/Content/shCore.css",
                "~/Content/jquery.tocify.css"));
        }
    }
}

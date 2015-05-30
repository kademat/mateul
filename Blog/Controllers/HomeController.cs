using System.Web.Mvc;

namespace Blog.Controllers
{
    public class HomeController : Controller
    {

		//GET: /Home/
        public ActionResult Index(int? id)
        {
            return View(id);
        }
    }
}
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularDragAndDrop.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            return View();
        }

        [HttpGet]
        public string GetData()
        {

            return JsonConvert.SerializeObject(GetTableDATA(), Formatting.Indented);
        }

        [HttpPost]
        public string PostData(MyData data)
        {

            return "Success !!!";
        }

        private DataTable GetTableDATA()
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("Name");
            dt.Columns.Add("picture");
            dt.Columns.Add("type");



            DataRow dr = dt.NewRow();
            dr["Name"] = "dog"; dr["picture"] = "url(pictures/dog.jpg)"; dr["type"] = "animal";
            dt.Rows.Add(dr);


            DataRow dr1 = dt.NewRow();
            dr1["Name"] = "parrot"; dr1["picture"] = "url(pictures/parrot.jpg)"; dr1["type"] = "bird";
            dt.Rows.Add(dr1);


            DataRow dr2 = dt.NewRow();
            dr2["Name"] = "horse"; dr2["picture"] = "url(pictures/horse.jpg)"; dr2["type"] = "animal";
            dt.Rows.Add(dr2);

            DataRow dr3 = dt.NewRow();
            dr3["Name"] = "lion"; dr3["picture"] = "url(pictures/lion.jpg)"; dr3["type"] = "animal";
            dt.Rows.Add(dr3);

            DataRow dr4 = dt.NewRow();
            dr4["Name"] = "sparrow"; dr4["picture"] = "url(pictures/sparrow.jpg)"; dr4["type"] = "bird";
            dt.Rows.Add(dr4);

            DataRow dr5 = dt.NewRow();
            dr5["Name"] = "hawks"; dr5["picture"] = "url(pictures/hawks.jpg)"; dr5["type"] = "bird";
            dt.Rows.Add(dr5);

            DataRow dr6 = dt.NewRow();
            dr6["Name"] = "elephant"; dr6["picture"] = "url(pictures/elephant.jpg)"; dr6["type"] = "animal";
            dt.Rows.Add(dr6);

            DataRow dr7 = dt.NewRow();
            dr7["Name"] = "doves"; dr7["picture"] = "url(pictures/doves.jpg)"; dr7["type"] = "bird";
            dt.Rows.Add(dr7);

            DataRow dr8 = dt.NewRow();
            dr8["Name"] = "finches"; dr8["picture"] = "url(pictures/finches.jpg)"; dr8["type"] = "bird";
            dt.Rows.Add(dr8);

            DataRow dr9 = dt.NewRow();
            dr9["Name"] = "monkey"; dr9["picture"] = "url(pictures/monkey.jpg)"; dr9["type"] = "animal";
            dt.Rows.Add(dr9);

            return dt;

        }
    }

    public class MyData
    {
        public string name { get; set; }
        public string age { get; set; }

    }

}

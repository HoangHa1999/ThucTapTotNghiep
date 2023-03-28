using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using thuctaptotnghiep.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace thuctaptotnghiep.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TienichController : ControllerBase
    {
        private quan_ly_khach_sanContext db = new quan_ly_khach_sanContext();
        // GET: api/<TienichController>
        [HttpGet]
        public IActionResult GetDSTienich()
        {

            try
            {
                List<CTienich> ds = db.Tieniches.Select(x => new CTienich
                {
                    matienich = x.Matienich,
                    tentienich = x.Tentienich,
                 
                }).ToList();
                return Ok(ds);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // GET api/<TienichController>/5
        [HttpGet("{id}")]
        public IActionResult getTienich(string id)
        {
            try
            {
                Tienich ti = db.Tieniches.Find(id);
                if (ti == null) return NotFound();
                else
                {
                    var kq = new CTienich
                    {
                        matienich = ti.Matienich,
                        tentienich = ti.Tentienich,
                    };
                    return Ok(kq);
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // POST api/<TienichController>
        [HttpPost]
        public IActionResult themTienich(CTienich ti)
        {
            try
            {
                Tienich t = db.Tieniches.Find(ti.matienich);
                if (t != null) return BadRequest();
                Tienich x = new Tienich
                {
                    Matienich = ti.matienich,
                    Tentienich = ti.tentienich,
                };
                db.Tieniches.Add(x);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // PUT api/<TienichController>/5
        [HttpPut]
        public IActionResult suaTienich(CTienich ti)
        {
            try
            {
                Tienich x = db.Tieniches.Find(ti.matienich);
                if (x == null) return NotFound();
                x.Tentienich = ti.tentienich;
               
                db.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // DELETE api/<TienichController>/5
        [HttpDelete("{id}")]
        public IActionResult xoaTienich(string id)
        {
            try
            {
                Tienich t = db.Tieniches.Find(id);
                if (t == null) return NotFound();
                if (db.PhongTieniches.Where(x => x.Matienich == id).ToList().Count > 0)
                    return BadRequest();
                db.Tieniches.Remove(t);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}

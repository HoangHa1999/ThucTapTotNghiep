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
    public class LoaiphongController : ControllerBase
    {
        private quan_ly_khach_sanContext db = new quan_ly_khach_sanContext();
        // GET: api/<LoaiphongController>
        [HttpGet]
        public IActionResult GetDSLoaiphong()
        {

            try
            {
                List<CLoaiphong> ds = db.Loaiphongs.Select(x => new CLoaiphong
                {
                    maloaiphong = x.Maloaiphong,
                    tenloaiphong = x.Tenloaiphong,
                    giaphong = x.Giaphong,
                    chitiet = x.Chitiet
                }).ToList();
                return Ok(ds);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // GET api/<LoaiphongController>/5
        [HttpGet("{id}")]
        public IActionResult getLoaiphong(string id)
        {
            try
            {
                Loaiphong lp = db.Loaiphongs.Find(id);
                if (lp == null) return NotFound();
                else
                {
                    var kq = new CLoaiphong
                    {
                        maloaiphong = lp.Maloaiphong,
                        tenloaiphong = lp.Tenloaiphong,
                        giaphong = lp.Giaphong,
                        chitiet = lp.Chitiet
                    };
                    return Ok(kq);
                }         
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // POST api/<LoaiphongController>
        [HttpPost]
        public IActionResult themLoaiphong(CLoaiphong lp)
        {
            try
            {
                Loaiphong t = db.Loaiphongs.Find(lp.maloaiphong);
                if (t != null) return BadRequest();
                Loaiphong x = new Loaiphong
                {
                    Maloaiphong = lp.maloaiphong,
                    Tenloaiphong = lp.tenloaiphong,
                    Giaphong = lp.giaphong,
                    Chitiet = lp.chitiet,
                };
                db.Loaiphongs.Add(x);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // PUT api/<LoaiphongController>/5
        [HttpPut]
        public IActionResult suaLoaiphong(CLoaiphong lp)
        {
            try
            {
                Loaiphong x = db.Loaiphongs.Find(lp.maloaiphong);
                if (x == null) return NotFound();
                x.Tenloaiphong = lp.tenloaiphong;
                x.Giaphong = lp.giaphong;
                x.Chitiet = lp.chitiet;
                db.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // DELETE api/<LoaiphongController>/5
        [HttpDelete("{id}")]
        public IActionResult xoaLoaiphong(string id)
        {
            try
            {
                Loaiphong t = db.Loaiphongs.Find(id);
                if (t == null) return NotFound();
                if (db.Thuephongs.Where(x => x.Maloaiphong == id).ToList().Count > 0)
                    return BadRequest();
                db.Loaiphongs.Remove(t);
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

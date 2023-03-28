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
    public class ThuephongController : ControllerBase
    {
        private quan_ly_khach_sanContext db = new quan_ly_khach_sanContext();

        [HttpGet]
        public IActionResult GetDSTP()
        {

            try
            {
                List<CThuephong> ds = db.Thuephongs.Select(x => new CThuephong
                {
                    maphieudatphong = x.Maphieudatphong,
                    maloaiphong = x.Maloaiphong
                   
                }).ToList();
                return Ok(ds);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


        [HttpGet("{id}")]
        public IActionResult getThuephong(string id)
        {
            try
            {
                Thuephong tp = db.Thuephongs.Find(id);
                if (tp == null) return NotFound();
                else
                {
                    var kq = new CThuephong
                    {
                        maphieudatphong = tp.Maphieudatphong,
                        maloaiphong = tp.Maloaiphong
                    };
                    return Ok(kq);
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

       
        [HttpPost]
        public IActionResult themThuephong(CThuephong tp)
        {
            try
            {
                
                Thuephong x = new Thuephong
                {
                    Maphieudatphong = tp.maphieudatphong,
                   Maloaiphong = tp.maloaiphong
                };
                db.Thuephongs.Add(x);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

     
        [HttpPut]
        public IActionResult suaThuephong(CThuephong tp)
        {
            try
            {
                Thuephong x = db.Thuephongs.Find(tp.maphieudatphong);
                if (x == null) return NotFound();
                x.Maloaiphong = tp.maloaiphong;
                db.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

       
        [HttpDelete("{id}")]
        public IActionResult xoaThuephong(string id)
        {
            try
            {
                Thuephong t = db.Thuephongs.Find(id);
                if (t == null) return NotFound();
                db.Thuephongs.Remove(t);
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

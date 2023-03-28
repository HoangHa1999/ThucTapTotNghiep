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
    public class PDPController : ControllerBase
    {
        private quan_ly_khach_sanContext db = new quan_ly_khach_sanContext();

        [HttpGet]
        public IActionResult GetDSPDP()
        {

            try
            {
                List<CPhieuDatPhong> ds = db.Phieudatphongs.Select(x => new CPhieuDatPhong
                {
                    maphieudatphong = x.Maphieudatphong,
                    makh = x.Makh,
                   
                    ngayden = x.Ngayden.ToString("yyyy-MM-dd"),
                    ngaydi = x.Ngaydi.ToString("yyyy-MM-dd"),
                    
                   
                }).ToList();
                return Ok(ds);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


        [HttpGet("{id}")]
        public IActionResult getPDP(string id)
        {
            try
            {
                Phieudatphong pdp = db.Phieudatphongs.Find(id);
                if (pdp == null) return NotFound();
                else
                {
                    var kq = new CPhieuDatPhong
                    {
                        maphieudatphong = pdp.Maphieudatphong,
                        makh = pdp.Makh,
                   
                        ngayden = pdp.Ngayden.ToString("yyyy-MM-dd"),
                        ngaydi = pdp.Ngaydi.ToString("yyyy-MM-dd"),
                       
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
        public IActionResult themPDP(CPhieuDatPhong pdp)
        {
            try
            {
                Phieudatphong t = db.Phieudatphongs.Find(pdp.maphieudatphong);
                if (t != null) return BadRequest();
                Phieudatphong x = new Phieudatphong
                {
                    Maphieudatphong = pdp.maphieudatphong,
                    Makh = pdp.makh,
                   
                    Ngayden = DateTime.Parse(pdp.ngayden),
                    Ngaydi = DateTime.Parse(pdp.ngaydi),
                  
                };
                db.Phieudatphongs.Add(x);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

     
        [HttpPut]
        public IActionResult suaPDP(CPhieuDatPhong pdp)
        {
            try
            {
                Phieudatphong x = db.Phieudatphongs.Find(pdp.maphieudatphong);
                if (x == null) return NotFound();
                x.Makh = pdp.makh;
               
                x.Ngayden = DateTime.Parse(pdp.ngayden);
                x.Ngaydi = DateTime.Parse(pdp.ngaydi);
              
                db.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

       
        [HttpDelete("{id}")]
        public IActionResult xoaPDP(string id)
        {
            try
            {
                Phieudatphong t = db.Phieudatphongs.Find(id);
                if (t == null) return NotFound();
                if (db.Thuephongs.Where(x => x.Maphieudatphong == id).ToList().Count > 0)
                    return BadRequest();
                db.Phieudatphongs.Remove(t);
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

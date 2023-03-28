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
    public class KhachhangController : ControllerBase
    {
        private quan_ly_khach_sanContext db = new quan_ly_khach_sanContext();
        // GET: api/<KhachhangController>
        [HttpGet]
        public IActionResult GetDSKhachhang()
        {

            try
            {
                List<CKhachhang> ds = db.Khachhangs.Select(x => new CKhachhang
                {
                    makh = x.Makh,
                    tenkh = x.Tenkh,
                    ngaysinh = x.Ngaysinh.ToString("yyyy-MM-dd"),
                    cmnd = x.Cmnd,
                    sdt = x.Sdt,

                    email = x.Email,
                    gioitinh = x.Gioitinh,
                    username = x.Username,
                    password = x.Password
                }).ToList();
                return Ok(ds);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // GET api/<KhachhangController>/5
        [HttpGet("{id}")]
        public IActionResult getKhachhang(string id)
        {
            try
            {
                Khachhang kh = db.Khachhangs.Find(id);
                if (kh == null) return NotFound();
                else
                {
                    var kq = new CKhachhang
                    {
                        makh = kh.Makh,
                        tenkh = kh.Tenkh,
                        ngaysinh = kh.Ngaysinh.ToString("yyyy-MM-dd"),
                        gioitinh = kh.Gioitinh,
                        cmnd = kh.Cmnd,
                        sdt = kh.Sdt,
                        email = kh.Email,
                        username = kh.Username,
                        password = kh.Password,
                    };
                    return Ok(kq);
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // POST api/<KhachhangController>
        [HttpPost]
        public IActionResult themKhachhang(CKhachhang kh)
        {
            try
            {
                Khachhang t = db.Khachhangs.Find(kh.makh);
                if (t != null) return BadRequest();
                Khachhang x = new Khachhang
                {
                    Makh = kh.makh,
                    Tenkh = kh.tenkh,
                    Ngaysinh = DateTime.Parse(kh.ngaysinh),
                    Gioitinh = kh.gioitinh,
                    Cmnd = kh.cmnd,
                    Sdt = kh.sdt,              
                    Email = kh.email,
                    Username = kh.username,
                    Password = kh.password,
                };
                db.Khachhangs.Add(x);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // PUT api/<KhachhangController>/5
        [HttpPut]
        public IActionResult suaKhachhang(CKhachhang kh)
        {
            try
            {
                Khachhang x = db.Khachhangs.Find(kh.makh);
                if (x == null) return NotFound();
                x.Tenkh = kh.tenkh;
                x.Ngaysinh = DateTime.Parse(kh.ngaysinh);
                x.Gioitinh = kh.gioitinh;
                x.Cmnd = kh.cmnd;
                x.Sdt = kh.sdt;             
                x.Email = kh.email;
                x.Username = kh.username;
                x.Password = kh.password;
                db.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // DELETE api/<KhachhangController>/5
        [HttpDelete("{id}")]
        public IActionResult xoaKhachhang(string id)
        {
            try
            {
                Khachhang t = db.Khachhangs.Find(id);
                if (t == null) return NotFound();
                if (db.Phieudatphongs.Where(x => x.Makh == id).ToList().Count > 0)
                    return BadRequest();
                db.Khachhangs.Remove(t);
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

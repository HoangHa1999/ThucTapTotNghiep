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
    public class NhanvienController : ControllerBase
    {
        private quan_ly_khach_sanContext db = new quan_ly_khach_sanContext();
        // GET: api/<NhanvienController>
        [HttpGet]
        public IActionResult GetDSNhanvien()
        {

            try
            {
                List<CNhanvien> ds = db.Nhanviens.Select(x => new CNhanvien
                {
                    manv = x.Manv,
                    tennv = x.Tennv,
                    ngaysinh = x.Ngaysinh.ToString("yyyy-MM-dd"),
                    cmndNv = x.CmndNv,
                    diachiNv = x.DiachiNv,
                    sdtNv = x.SdtNv,

                    email = x.Email,
                    gioitinh = x.Gioitinh
                }).ToList();
                return Ok(ds);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // GET api/<NhanvienController>/5
        [HttpGet("{id}")]
        public IActionResult getNhanvien(string id)
        {
            try
            {
                Nhanvien nv = db.Nhanviens.Find(id);
                if (nv == null) return NotFound();
                else
                {
                    var kq = new CNhanvien
                    {
                        manv = nv.Manv,
                        tennv = nv.Tennv,
                        ngaysinh = nv.Ngaysinh.ToString("yyyy-MM-dd"),
                        gioitinh = nv.Gioitinh,
                        cmndNv = nv.CmndNv,
                        sdtNv = nv.SdtNv,

                        email = nv.Email,
                        diachiNv = nv.DiachiNv
                    };
                    return Ok(kq);
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // POST api/<NhanvienController>
        [HttpPost]
        public IActionResult themNhanvien(CNhanvien nv)
        {
            try
            {
                Nhanvien t = db.Nhanviens.Find(nv.manv);
                if (t != null) return BadRequest();
                Nhanvien x = new Nhanvien
                {
                    Manv = nv.manv,
                    Tennv = nv.tennv,
                    Ngaysinh = DateTime.Parse(nv.ngaysinh),
                    Gioitinh = nv.gioitinh,
                    CmndNv = nv.cmndNv,
                    SdtNv = nv.sdtNv,

                    Email = nv.email,
                    DiachiNv = nv.diachiNv
                };
                db.Nhanviens.Add(x);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // PUT api/<NhanvienController>/5
        [HttpPut]
        public IActionResult suaNhanvien(CNhanvien nv)
        {
            try
            {
                Nhanvien x = db.Nhanviens.Find(nv.manv);
                if (x == null) return NotFound();
                x.Tennv = nv.tennv;
                x.Ngaysinh = DateTime.Parse(nv.ngaysinh);
                x.Gioitinh = nv.gioitinh;
                x.CmndNv = nv.cmndNv;
                x.SdtNv = nv.sdtNv;

                x.Email = nv.email;
                x.DiachiNv = nv.diachiNv;
                db.SaveChanges();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // DELETE api/<NhanvienController>/5
        [HttpDelete("{id}")]
        public IActionResult xoaNhanvien(string id)
        {
            try
            {
                Nhanvien t = db.Nhanviens.Find(id);
                if (t == null) return NotFound();
                if (db.Dichvus.Where(x => x.Madv == id).ToList().Count > 0)
                    return BadRequest();
                db.Nhanviens.Remove(t);
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

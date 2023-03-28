using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace thuctaptotnghiep.Models
{
    public class CKhachhang
    {
        public string makh { get; set; }
        public string tenkh { get; set; }
        public string ngaysinh { get; set; }
        public int gioitinh { get; set; }
        public string cmnd { get; set; }
        public int sdt { get; set; }
      
        public string email { get; set; }
        public string username { get; set; }
        public string password { get; set; }

      
        public List<Phieudatphong> Phieudatphongs { get; set; }
       
    }
}

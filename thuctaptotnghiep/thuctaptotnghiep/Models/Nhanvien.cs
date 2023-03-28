using System;
using System.Collections.Generic;

#nullable disable

namespace thuctaptotnghiep.Models
{
    public partial class Nhanvien
    {
        public Nhanvien()
        {
            Dichvus = new HashSet<Dichvu>();
        }

        public string Manv { get; set; }
        public string Tennv { get; set; }
        public DateTime Ngaysinh { get; set; }
        public string CmndNv { get; set; }
        public string DiachiNv { get; set; }
        public int SdtNv { get; set; }
        public string Email { get; set; }
        public int Gioitinh { get; set; }

        public virtual ICollection<Dichvu> Dichvus { get; set; }
    }
}

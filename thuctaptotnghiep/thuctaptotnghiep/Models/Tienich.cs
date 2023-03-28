using System;
using System.Collections.Generic;

#nullable disable

namespace thuctaptotnghiep.Models
{
    public partial class Tienich
    {
        public Tienich()
        {
            PhongTieniches = new HashSet<PhongTienich>();
        }

        public string Matienich { get; set; }
        public string Tentienich { get; set; }

        public virtual ICollection<PhongTienich> PhongTieniches { get; set; }
    }
}

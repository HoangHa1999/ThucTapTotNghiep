using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace thuctaptotnghiep.Models
{
    public partial class quan_ly_khach_sanContext : DbContext
    {
        public quan_ly_khach_sanContext()
        {
        }

        public quan_ly_khach_sanContext(DbContextOptions<quan_ly_khach_sanContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Dichvu> Dichvus { get; set; }
        public virtual DbSet<Hoadon> Hoadons { get; set; }
        public virtual DbSet<Khachhang> Khachhangs { get; set; }
        public virtual DbSet<Loaiphong> Loaiphongs { get; set; }
        public virtual DbSet<Nhanvien> Nhanviens { get; set; }
        public virtual DbSet<Phieudatphong> Phieudatphongs { get; set; }
        public virtual DbSet<PhongTienich> PhongTieniches { get; set; }
        public virtual DbSet<Thuephong> Thuephongs { get; set; }
        public virtual DbSet<Tienich> Tieniches { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=HOANGHA\\SQLExpress;Database=quan_ly_khach_san;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Dichvu>(entity =>
            {
                entity.HasKey(e => e.Madv);

                entity.ToTable("DICHVU");

                entity.Property(e => e.Madv)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MADV");

                entity.Property(e => e.Giadv).HasColumnName("GIADV");

                entity.Property(e => e.Manv)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MANV");

                entity.Property(e => e.Tendv)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("TENDV");

                entity.HasOne(d => d.ManvNavigation)
                    .WithMany(p => p.Dichvus)
                    .HasForeignKey(d => d.Manv)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DICHVU_NHANVIEN");
            });

            modelBuilder.Entity<Hoadon>(entity =>
            {
                entity.HasKey(e => e.Mahd);

                entity.ToTable("HOADON");

                entity.Property(e => e.Mahd)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MAHD");

                entity.Property(e => e.Madv)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MADV");

                entity.Property(e => e.Maphieudatphong)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MAPHIEUDATPHONG");

                entity.Property(e => e.Ngaylaphd)
                    .HasColumnType("datetime")
                    .HasColumnName("NGAYLAPHD");

                entity.Property(e => e.Tongtien).HasColumnName("TONGTIEN");

                entity.HasOne(d => d.MadvNavigation)
                    .WithMany(p => p.Hoadons)
                    .HasForeignKey(d => d.Madv)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_HOADON_DICHVU");

                entity.HasOne(d => d.MaphieudatphongNavigation)
                    .WithMany(p => p.Hoadons)
                    .HasForeignKey(d => d.Maphieudatphong)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_HOADON_PHIEUDATPHONG");
            });

            modelBuilder.Entity<Khachhang>(entity =>
            {
                entity.HasKey(e => e.Makh)
                    .HasName("PK__KHACHHAN__603F592CD9ED3A95");

                entity.ToTable("KHACHHANG");

                entity.Property(e => e.Makh)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MAKH")
                    .HasDefaultValueSql("([DBO].[AUTO_IDKH]())");

                entity.Property(e => e.Cmnd)
                    .IsRequired()
                    .HasMaxLength(13)
                    .IsUnicode(false)
                    .HasColumnName("CMND");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.Gioitinh).HasColumnName("GIOITINH");

                entity.Property(e => e.Ngaysinh)
                    .HasColumnType("date")
                    .HasColumnName("NGAYSINH");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("PASSWORD");

                entity.Property(e => e.Sdt).HasColumnName("SDT");

                entity.Property(e => e.Tenkh)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("TENKH");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("USERNAME");
            });

            modelBuilder.Entity<Loaiphong>(entity =>
            {
                entity.HasKey(e => e.Maloaiphong)
                    .HasName("PK_PHONG");

                entity.ToTable("LOAIPHONG");

                entity.Property(e => e.Maloaiphong)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MALOAIPHONG");

                entity.Property(e => e.Chitiet)
                    .HasMaxLength(1000)
                    .HasColumnName("CHITIET");

                entity.Property(e => e.Giaphong).HasColumnName("GIAPHONG");

                entity.Property(e => e.Tenloaiphong)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("TENLOAIPHONG");
            });

            modelBuilder.Entity<Nhanvien>(entity =>
            {
                entity.HasKey(e => e.Manv);

                entity.ToTable("NHANVIEN");

                entity.Property(e => e.Manv)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MANV");

                entity.Property(e => e.CmndNv)
                    .IsRequired()
                    .HasMaxLength(13)
                    .IsUnicode(false)
                    .HasColumnName("CMND_NV");

                entity.Property(e => e.DiachiNv)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("DIACHI_NV");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.Gioitinh).HasColumnName("GIOITINH");

                entity.Property(e => e.Ngaysinh)
                    .HasColumnType("date")
                    .HasColumnName("NGAYSINH");

                entity.Property(e => e.SdtNv).HasColumnName("SDT_NV");

                entity.Property(e => e.Tennv)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("TENNV");
            });

            modelBuilder.Entity<Phieudatphong>(entity =>
            {
                entity.HasKey(e => e.Maphieudatphong)
                    .HasName("PK__PHIEUDAT__F5150851A46300F9");

                entity.ToTable("PHIEUDATPHONG");

                entity.Property(e => e.Maphieudatphong)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MAPHIEUDATPHONG")
                    .HasDefaultValueSql("([DBO].[AUTO_IDPDP]())");

                entity.Property(e => e.Makh)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MAKH");

                entity.Property(e => e.Ngayden)
                    .HasColumnType("date")
                    .HasColumnName("NGAYDEN");

                entity.Property(e => e.Ngaydi)
                    .HasColumnType("date")
                    .HasColumnName("NGAYDI");

                entity.HasOne(d => d.MakhNavigation)
                    .WithMany(p => p.Phieudatphongs)
                    .HasForeignKey(d => d.Makh)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PHIEUDATPHONG_KHACHHANG");
            });

            modelBuilder.Entity<PhongTienich>(entity =>
            {
                entity.HasKey(e => new { e.Maloaiphong, e.Matienich });

                entity.ToTable("PHONG_TIENICH");

                entity.Property(e => e.Maloaiphong)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MALOAIPHONG");

                entity.Property(e => e.Matienich)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MATIENICH");

                entity.HasOne(d => d.MaloaiphongNavigation)
                    .WithMany(p => p.PhongTieniches)
                    .HasForeignKey(d => d.Maloaiphong)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PHONG_TIENICH_PHONG_TIENICH");

                entity.HasOne(d => d.MatienichNavigation)
                    .WithMany(p => p.PhongTieniches)
                    .HasForeignKey(d => d.Matienich)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PHONG_TIENICH_TIENICH");
            });

            modelBuilder.Entity<Thuephong>(entity =>
            {
                entity.HasKey(e => new { e.Maphieudatphong, e.Maloaiphong })
                    .HasName("PK_CHITIETDATPHONG");

                entity.ToTable("THUEPHONG");

                entity.Property(e => e.Maphieudatphong)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MAPHIEUDATPHONG");

                entity.Property(e => e.Maloaiphong)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MALOAIPHONG");

                entity.HasOne(d => d.MaloaiphongNavigation)
                    .WithMany(p => p.Thuephongs)
                    .HasForeignKey(d => d.Maloaiphong)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_THUEPHONG_LOAIPHONG");

                entity.HasOne(d => d.MaphieudatphongNavigation)
                    .WithMany(p => p.Thuephongs)
                    .HasForeignKey(d => d.Maphieudatphong)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_THUEPHONG_PHIEUDATPHONG");
            });

            modelBuilder.Entity<Tienich>(entity =>
            {
                entity.HasKey(e => e.Matienich);

                entity.ToTable("TIENICH");

                entity.Property(e => e.Matienich)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("MATIENICH");

                entity.Property(e => e.Tentienich)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("TENTIENICH");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace TrakGud.DAL.Models
{
    [Table("um__Right")]
    public partial class UmRight
    {
        public UmRight()
        {
            UmRightRightsSections = new HashSet<UmRightRightsSection>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("title")]
        [StringLength(150)]
        public string Title { get; set; }
        [Column("desc")]
        public string Desc { get; set; }
        [Column("isActive")]
        public bool IsActive { get; set; }
        [Column("addTS", TypeName = "timestamp with time zone")]
        public DateTime AddTs { get; set; }
        [Column("adderId")]
        public int AdderId { get; set; }
        [Column("modderId")]
        public int? ModderId { get; set; }
        [Column("isRemoved")]
        public bool? IsRemoved { get; set; }
        [Column("modTS", TypeName = "timestamp with time zone")]
        public DateTime? ModTs { get; set; }

        [ForeignKey(nameof(AdderId))]
        [InverseProperty(nameof(UmUser.UmRightAdders))]
        public virtual UmUser Adder { get; set; }
        [ForeignKey(nameof(ModderId))]
        [InverseProperty(nameof(UmUser.UmRightModders))]
        public virtual UmUser Modder { get; set; }
        [InverseProperty(nameof(UmRightRightsSection.Right))]
        public virtual ICollection<UmRightRightsSection> UmRightRightsSections { get; set; }
    }
}

﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace TrakGud.DAL.Models
{
    [Table("cm__Email")]
    public partial class CmEmail
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("fieldType")]
        [StringLength(25)]
        public string FieldType { get; set; }
        [Column("contactId")]
        public int? ContactId { get; set; }
        [Column("name")]
        [StringLength(25)]
        public string Name { get; set; }
        [Required]
        [Column("email")]
        [StringLength(320)]
        public string Email { get; set; }
        [Column("addTS", TypeName = "timestamp with time zone")]
        public DateTime AddTs { get; set; }
        [Column("adderId")]
        public int AdderId { get; set; }
        [Column("modTS", TypeName = "timestamp with time zone")]
        public DateTime? ModTs { get; set; }
        [Column("modderId")]
        public int? ModderId { get; set; }
        [Column("isRemoved")]
        public bool? IsRemoved { get; set; }

        [ForeignKey(nameof(AdderId))]
        [InverseProperty(nameof(UmUser.CmEmailAdders))]
        public virtual UmUser Adder { get; set; }
        [ForeignKey(nameof(ContactId))]
        [InverseProperty(nameof(CmContact.CmEmails))]
        public virtual CmContact Contact { get; set; }
        [ForeignKey(nameof(FieldType))]
        [InverseProperty(nameof(CmContactFieldType.CmEmails))]
        public virtual CmContactFieldType FieldTypeNavigation { get; set; }
        [ForeignKey(nameof(ModderId))]
        [InverseProperty(nameof(UmUser.CmEmailModders))]
        public virtual UmUser Modder { get; set; }
    }
}

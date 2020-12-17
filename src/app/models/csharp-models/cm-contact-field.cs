﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace TrakGud.DAL.Models
{
    [Table("cm__ContactField")]
    [Index(nameof(ContactId), Name = "fki_contactId_fkey")]
    [Index(nameof(FieldType), Name = "fki_fieldType_fkey")]
    public partial class CmContactField
    {
        public CmContactField()
        {
            CmAddressContactFields = new HashSet<CmAddressContactField>();
        }

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
        [InverseProperty(nameof(UmUser.CmContactFieldAdders))]
        public virtual UmUser Adder { get; set; }
        [ForeignKey(nameof(ContactId))]
        [InverseProperty(nameof(CmContact.CmContactFields))]
        public virtual CmContact Contact { get; set; }
        [ForeignKey(nameof(FieldType))]
        [InverseProperty(nameof(CmContactFieldType.CmContactFields))]
        public virtual CmContactFieldType FieldTypeNavigation { get; set; }
        [ForeignKey(nameof(ModderId))]
        [InverseProperty(nameof(UmUser.CmContactFieldModders))]
        public virtual UmUser Modder { get; set; }
        [InverseProperty(nameof(CmAddressContactField.ContactField))]
        public virtual ICollection<CmAddressContactField> CmAddressContactFields { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Shareds
{
    [Table("comment")]
    public sealed class Comment
    {
        [Key()]
        [Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column("title")]
        [Required()]
        [MaxLength(100)]
        public string Title { get; set; }

        [Column("text")]
        [Required()]        
        public string Text { get; set; }
    }
}

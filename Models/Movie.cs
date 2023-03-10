using System.ComponentModel.DataAnnotations;

namespace MovieCrud.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string? Titulo { get; set; }

        [DataType(DataType.Date)]
        public DateTime Fecha { get; set; }
        public string? Género { get; set; }
        public decimal Precio { get; set; }
    }
}

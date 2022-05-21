export const state = () => ({
  lesion_list: [
    {
      id: 'nv',
      name: 'Melanocytic nevus',
      vn_name: 'Nốt ruồi',
      images: [
        '/nv/ISIC_0024306.jpg',
        '/nv/ISIC_0024307.jpg',
        '/nv/ISIC_0024314.jpg',
        '/nv/ISIC_0024316.jpg',
        '/nv/ISIC_0024317.jpg',
        '/nv/ISIC_0024319.jpg',
      ],
      risk: `Là u lành tính nên không gây ra tác hại gì. Tuy nhiên, nốt ruồi ở những vị trí dễ bị kích thích, 
      tác động lặp đi lặp lại nhiều lần như: sờ nắn, nặn, phơi nắng nhiều, có thể là yếu tố để kích thích nốt ruồi trở thành ác tính.`,
      age: `Xuất hiện nhiều nhất vào tuổi thiếu nhi, ít hơn ở tuổi lớn, không xuất hiện sau 60 tuổi`,
      gender: `Bất  kỳ  giới tính nào.`,
      localization: `Có thể ở bất kỳ vị trí nào trên cơ thể.  Số lượng nhiều hay ít phụ thuộc di truyền và tình trạng tiếp xúc ánh nắng.`,
      description: `U tế bào hắc tố lành tính ở da, là sang thương da khá phổ biến. Có thể là dát, nốt hay sẩn, 
        hình tròn hoặc oval, đôi khi có hình dạng bất thường, đường kính từ vài mm đến vài cm, giới hạn rõ, 
        có màu đỏ, màu da, màu nâu hoặc đen.`,
    },
    {
      id: 'mel',
      name: 'Malignant melanoma',
      vn_name: 'Ung thư tế bào hắc tố',
      images: [
        '/mel/ISIC_0024313.jpg',
        '/mel/ISIC_0024315.jpg',
        '/mel/ISIC_0024323.jpg',
        '/mel/ISIC_0024333.jpg',
        '/mel/ISIC_0024351.jpg',
        '/mel/ISIC_0024367.jpg',
      ],
      risk: `Ung thư tế bào hắc tố là loại ung thư da ác tính nguy hiểm nhất bởi vì nó có thể xâm lấn sâu, tiến triển nhanh và 
      di căn sang các bộ phận khác của cơ thể. Thường gặp nhiều nhất ở người da trắng.`,
      age: `Thường gặp ở người nhiều tuổi và hiếm gặp ở trẻ em`,
      gender: `Có thể xuất hiện ở cả nam lẫn nữ.`,
      localization: `70% u xuất hiện trên các nốt ruồi bẩm sinh thường gặp ở vùng thân mình (24%), đầu cổ (20%), chi (10%). 
      Ở phụ nữ, chúng thường xuất hiện ở chân, trong khi ở nam giới chúng phổ biến nhất ở lưng. `,
      description: `U thường xuất hiện trên mặt da thành cục hoặc thành nấm, ít khi là mảng phẳng.
        \nVùng quanh u thấy có vùng thâm nhiễm, chuyển tiếp giữa u và tổ chức da lành. U hắc tố thường giống nốt ruồi;
        một số phát triển từ nốt ruồi.`,
    },
    {
      id: 'bkl',
      name: 'Benign ketaroses-like lesions',
      vn_name: 'Tổn thương tiết bã lành tính',
      images: [
        '/bkl/ISIC_0024312.jpg',
        '/bkl/ISIC_0024324.jpg',
        '/bkl/ISIC_0024336.jpg',
        '/bkl/ISIC_0024338.jpg',
        '/bkl/ISIC_0024358.jpg',
      ],
      risk: `Không gây đau, không ảnh hưởng đến sức khỏe nhưng lại khiến cho làn da người bệnh mất đi 
      tính thẩm mỹ do sự xuất hiện các mảng sáp sậm màu. Ngoài ra nếu kích thước nốt dày sừng tiết bã 
      lớn có thể gây vướng khi mặc quần áo. Khi gãi lên nốt u để giảm ngứa có thể làm u vỡ ra, gây chảy máu và viêm nhiễm.`,
      age: 'Càng lớn tuổi thì các nốt xuất hiện càng nhiều. Bệnh rất phổ biến ở người trên 60 tuổi và rất hiếm gặp ở những người dưới 40',
      gender: `Bất kỳ giới tính nào.`,
      localization: 'Thường gặp trên mặt, vai, ngực hoặc lưng.',
      description: `Là 1 phân nhóm lớn bao gồm nhiều bệnh, trong đó bệnh thường gặp nhất là Chứng
        dày sừng tiết bã (Seborrheic keratosis). Các nốt dày sừng tiết bã có dạng hình sáp, sẹo,
        hơi tăng sinh, có màu nâu, đen hoặc màu sáng.`,
    },
    {
      id: 'vasc',
      name: 'Vascular lesion',
      vn_name: 'Tổn thương mạch máu trên da',
      images: [
        '/vasc/ISIC_0024370.jpg',
        '/vasc/ISIC_0024402.jpg',
        '/vasc/ISIC_0024375.jpg',
      ],
      risk: `Bệnh thường lành tính. Đôi khi gây đau, khó chịu cho bệnh nhân.`,
      age: `U mạch anh đào tăng số lượng rõ rệt từ khoảng 40 tuổi, vì vậy người ta ước tính rằng 75% người trên 75 tuổi mắc bệnh này.`,
      gender: ' Bất kỳ giới tính.',
      localization: `Thường nằm rải rác trên thân mình,  bất kỳ phần nào của bề mặt cơ thể, nhưng hiếm khi được tìm thấy trên bàn tay và bàn chân hoặc niêm mạc.`,
      description: `Là 1 phân nhóm lớn bao gồm nhiều bệnh ngoài da do tổn thương mạch gây ra, thường gặp nhất là 3 bệnh: U mạch 
      anh đào, U mạch sừng hóa và U mạch các sẩn hoặc mảng mềm. U mạch anh đào (hay Cherry angioma) là các nốt 
      màu đỏ tươi hoặc màu tím, hình tròn, gồ cao, kích thước ≈ 3mm. U mạch sừng hóa (hay Angiokeratoma) là các 
      sẩn, gồ lên mặt da, bề mặt hơi bong vảy nhẹ, màu đỏ, xanh hoặc đen. Cuối cùng là U mạch các sẩn hoặc mảng 
      mềm (hay Hemangioma) kích thước 1-8cm có màu đỏ sáng.`,
    },
    {
      id: 'df',
      name: 'Dermatofibroma',
      vn_name: 'U sợi bì',
      images: [
        '/df/ISIC_0024330.jpg',
        '/df/ISIC_0024386.jpg',
        '/df/ISIC_0024396.jpg',
      ],
      risk: `Là các khối u lành tính và hiếm khi  phát triển thành ung thư. Tuy nhiên có thể gây đau và ngứa cho bệnh nhân.`,
      age: 'Xảy ra ở bất cứ độ tuổi nào, nhưng thường gặp từ 20-49 tuổi.',
      gender: 'Bệnh gặp ở phụ nữ nhiều hơn.',
      localization: 'Hay gặp ở chi (tay, chân) hơn ở các vị trí khác.',
      description: `Là sẩn hoặc nốt, trơn láng, có thể khô, có vảy, giới hạn rõ, kích thước 3-10mm, sờ 
      cứng, chắc, màu hồng, nâu hoặc nâu đen, không có triệu chứng cơ năng`,
    },
    {
      id: 'akiec',
      name: 'Actinic keratosis',
      vn_name: 'Dày sừng quang hóa',
      images: [
        '/akiec/ISIC_0024329.jpg',
        '/akiec/ISIC_0024372.jpg',
        '/akiec/ISIC_0024418.jpg',
        '/akiec/ISIC_0024450.jpg',
      ],
      risk: `Phổ biến ở người da trắng và có thể tiến triển đến ung thư biểu mô tế bào đáy.`,
      age: `Có thể xảy ra ở những bệnh nhân 20-30 tuổi, nhưng thường gặp hơn là lứa tuổi 50 và lớn hơn`,
      gender: 'Gặp ở nam nhiều hơn nữ.',
      localization: `Vùng da đó tiếp xúc lâu dài với ánh nắng như mặt, tai, đỉnh đầu, cẳng tay và mu bàn tay. 
      Tuy nhiên cũng có thể gặp ở những vùng tiếp xúc với nắng lặp đi lặp lại như lưng, ngực và chân.`,
      description: `Gồm những nốt sần sùi, mảng tăng sừng đường kính vài cm. Hầu hết sang thương đa dạng gồm những mảng dẹt, 
      bao phủ bởi lớp sừng. Sang thương điển hình là mảng hồng ban tăng sừng (được bao phủ bởi lớp sừng). Thường có đường kính 
      3-10mm và dần dần to ra, cao hơn.`,
    },
    {
      id: 'bcc',
      name: 'Basal cell carcinoma',
      vn_name: 'Ung thư biểu mô tế bào đáy',
      images: [
        '/bcc/ISIC_0024331.jpg',
        '/bcc/ISIC_0024332.jpg',
        '/bcc/ISIC_0024345.jpg',
        '/bcc/ISIC_0024360.jpg',
      ],
      risk: `Loại ung thư này có khả năng lây lan (di căn) khá nhanh từ da sang các bộ phận khác hoặc vùng da khác, 
      có thể di căn đến xương. Đây là bệnh ác tính phổ biến nhất ở người da trắng.`,
      age: `Chia thành 2 nhóm: Nhóm không di truyền thường gặp ở người lớn tuổi và trung niên và Nhóm di truyền thường gặp ở người trẻ tuổi.`,
      gender: 'Bất kỳ giới tính nào đều có thể bị.',
      localization: `Thường xảy ra trên các vùng da tiếp xúc với ánh nắng mặt trời, chẳng hạn như đầu và cổ, 
      nhưng cũng có thể xảy ra ở bất cứ vị trí nào trên cơ thể.`,
      description: `Thường xuất hiện dưới dạng vết sưng u trên da, hơi trong suốt. Ngoài ra, bệnh có thể biểu hiện tổn thương ở các dạng khác.`,
    },
  ],
})

export const getters = {
  length: (state) => {
    return state.lesion_list.length
  },
  getLesion: (state) => (id) => {
    return state.lesion_list.find((lesion) => lesion.id === id)
  },
}

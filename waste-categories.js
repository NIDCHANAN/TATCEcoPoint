window.EcoWasteCategories = [
    {
        id: 'rdf-special',
        name: 'RDF พิเศษ',
        description: 'แก้วเครื่องดื่ม ภาชนะพลาสติก และแก้วกาแฟ',
        examples: ['แก้วกาแฟ', 'ภาชนะเครื่องดื่มพลาสติก'],
        icon: 'fa-fire-flame-curved',
        tone: 'rdf',
        pointsPerUnit: 1, // เช่น 5 ใบ 5 แต้ม (ตกใบละ 1 แต้ม) หรือปรับตามสัดส่วน
        pointsLabel: '1 แต้ม/ชิ้น'
    },
    {
        id: 'rdf-standard',
        name: 'RDF แบบปกติ',
        description: 'หลอด ถุงแกง ถุงพลาสติก และซองขนมไม่มีฟอยล์',
        examples: ['หลอด', 'ถุงแกง', 'ถุงพลาสติก', 'ซองขนมไม่มีฟอยล์'],
        icon: 'fa-fire',
        tone: 'rdf',
        pointsPerUnit: 0.2, // อ้างอิงจาก 20 หลอด = 2 แต้ม (0.1 หรือ 0.2 แต้มต่อชิ้น)
        pointsLabel: 'ตามจำนวนชิ้น'
    },
    {
        id: 'general',
        name: 'ขยะทั่วไป',
        description: 'ถ้วยมาม่า ซองขนมแบบมีฟอยล์ และวัสดุทั่วไป',
        examples: ['ถ้วยมาม่า', 'ซองขนมมีฟอยล์', 'ขยะทั่วไป'],
        icon: 'fa-trash-can',
        tone: 'general',
        pointsPerUnit: 0.2, // อ้างอิงจาก 10 ซอง = 2 แต้ม
        pointsLabel: 'ตามจำนวนชิ้น'
    },
    {
        id: 'plastic-container',
        name: 'ขวดพลาสติก / ถังพลาสติก',
        description: 'ขวดน้ำพลาสติกใส ขวดใหญ่ ขวดแชมพู หรือพลาส็กรีไซเคิล (10 แต้ม/ชิ้น)',
        examples: ['ขวดน้ำพลาสติกใส', 'ขวดพลาสติกขนาดใหญ่', 'ขวดแชมพู/สบู่', 'พลาสติกรีไซเคิล 1 ชิ้น'],
        icon: 'fa-bottle-water',
        tone: 'plastic',
        pointsPerKg: 10, // อ้างอิงจากลำดับ 39-40 (1 กิโลกรัม = 10 แต้ม)
        pointsPerUnit: 1,  // อ้างอิงจากขวดน้ำใส 1 ขวด = 1 แต้ม
        pointsLabel: '1 แต้ม/ขวด หรือ 10 แต้ม/ชิ้น'
    },
    {
        id: 'metal-cans',
        name: 'ขวดกระป๋องอะลูมิเนียมโลหะ',
        description: 'กระป๋องน้ำอัดลม กระป๋องกาแฟ หรืออะลูมิเนียม (20 แต้ม/ชิ้น)',
        examples: ['กระป๋องน้ำอัดลม', 'กระป๋องกาแฟ', 'กระป๋องอะลูมิเนียม 1 ชิ้น'],
        icon: 'fa-glass-water-droplet',
        tone: 'metal',
        pointsPerKg: 20, // อ้างอิงจากลำดับ 41 (1 กิโลกรัม = 20 แต้ม)
        pointsPerUnit: 2,  // อ้างอิงจากกระป๋องน้ำอัดลม 1 กระป๋อง = 2 แต้ม
        pointsLabel: '2 แต้ม/กระป๋อง หรือ 20 แต้ม/ชิ้น'
    },
    {
        id: 'glass-bottles',
        name: 'ขวดแก้ว',
        description: 'ขวดสปอนเซอร์ ขวดเครื่องดื่มชูกำลัง หรือขวดแก้ว (5 แต้ม/ชิ้น)',
        examples: ['ขวดสปอนเซอร์', 'ขวดเครื่องดื่มชูกำลัง', 'ขวดแก้ว 1 ชิ้น'],
        icon: 'fa-wine-bottle',
        tone: 'glass',
        pointsPerKg: 5,  // อ้างอิงจากลำดับ 42 (1 กิโลกรัม = 5 แต้ม)
        pointsPerUnit: 2,  // อ้างอิงจากขวดแก้ว 1 ขวด = 2 แต้ม
        pointsLabel: '2 แต้ม/ขวด หรือ 5 แต้ม/ชิ้น'
    },
    {
        id: 'paper',
        name: 'กระดาษ',
        description: 'กระดาษ A4 หนังสือพิมพ์ สมุด หนังสือเรียน หรือกระดาษลัง (5 แต้ม/ชิ้น)',
        examples: ['กระดาษ A4', 'หนังสือพิมพ์', 'ลังกระดาษ 1 ชิ้น'],
        icon: 'fa-box',
        tone: 'paper',
        pointsPerKg: 5,  // อ้างอิงจากลำดับ 37-38, 43-45 (1 กิโลกรัม = 5 แต้ม)
        pointsPerUnit: 0.2, // อ้างอิงสัดส่วนย่อย
        pointsLabel: 'ตามน้ำหนัก (5 แต้ม/ชิ้น)'
    },
    {
        id: 'hazardous',
        name: 'ขยะอันตราย',
        description: 'ปากกาลิควิด สารเคมี หรือขยะอันตราย (20 แต้ม/ชิ้น)',
        examples: ['ปากกาลิควิด', 'สารเคมี', 'ขยะอันตราย 1 ชิ้น'],
        icon: 'fa-triangle-exclamation',
        tone: 'hazardous',
        pointsPerKg: 20, // อ้างอิงจากลำดับ 50 (1 กิโลกรัม = 20 แต้ม)
        pointsPerUnit: 5,  // ชิ้นละ 5 แต้ม
        pointsLabel: '5 แต้ม/ชิ้น หรือ 20 แต้ม/ชิ้น'
    },
    {
        id: 'food-scraps',
        name: 'ถังเศษอาหาร',
        description: 'เศษอาหารจากมื้อที่รับประทานไม่หมด',
        examples: ['เศษอาหาร', 'เปลือกผักผลไม้'],
        icon: 'fa-seedling',
        tone: 'organic',
        pointsPerKg: 1,
        pointsPerUnit: 1,
        pointsLabel: '1 แต้ม'
    },
    {
        id: 'drinks-liquid',
        name: 'ถังน้ำและเครื่องดื่ม',
        description: 'เทน้ำหรือเครื่องดื่มที่เหลือก่อนทิ้งภาชนะ',
        examples: ['น้ำดื่มเหลือ', 'เครื่องดื่มเหลือ', 'น้ำแข็งละลาย'],
        icon: 'fa-glass-water',
        tone: 'liquid',
        pointsPerKg: 1,
        pointsPerUnit: 1,
        pointsLabel: '1 แต้ม'
    },
    {
        id: 'infectious-waste',
        name: 'ขยะอันตรายแบบติดเชื้อ',
        description: 'หน้ากากและถุงมือที่ปนเปื้อน',
        examples: ['หน้ากากใช้แล้ว', 'ถุงมือติดเชื้อ'],
        icon: 'fa-kit-medical',
        tone: 'infectious',
        pointsPerKg: 5,
        pointsPerUnit: 5,
        pointsLabel: '5 แต้ม'
    }
];


window.resolveEcoWasteCategory = function (record) {
    const categories = window.EcoWasteCategories;
    const directMatch = categories.find(category => category.id === record?.category);
    if (directMatch) return directMatch;

    const value = `${record?.item || ''} ${record?.type || ''}`.toLocaleLowerCase('th');
    if (value.includes('ติดเชื้อ') || value.includes('หน้ากาก') || value.includes('ถุงมือ')) return categories.find(category => category.id === 'infectious-waste');
    if (value.includes('สารเคมี') || value.includes('อันตราย')) return categories.find(category => category.id === 'hazardous');
    if (value.includes('เศษอาหาร') || value.includes('อินทรีย์') || value.includes('อาหาร')) return categories.find(category => category.id === 'food-scraps');
    if (value.includes('น้ำ') || value.includes('เครื่องดื่มเหลือ') || value.includes('ของเหลว')) return categories.find(category => category.id === 'drinks-liquid');
    if (value.includes('กระดาษ') || value.includes('paper')) return categories.find(category => category.id === 'paper');
    if (value.includes('กระป๋อง') || value.includes('โลหะ') || value.includes('อะลูมิเนียม')) return categories.find(category => category.id === 'metal-cans');
    if (value.includes('แก้ว') || value.includes('glass')) return categories.find(category => category.id === 'glass-bottles');
    if (value.includes('ทั่วไป') || value.includes('ฟอยล์')) return categories.find(category => category.id === 'general');
    if (value.includes('recycle') || value.includes('รีไซเคิล') || value.includes('พลาสติก') || value.includes('pet')) return categories.find(category => category.id === 'plastic-container');
    return categories.find(category => category.id === 'rdf-standard');
};

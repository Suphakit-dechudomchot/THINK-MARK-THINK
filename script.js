const data = {
    "สี": ["แดง", "เขียว", "เหลือง", "น้ำเงิน", "ม่วง", "ดำ", "ขาว", "ส้ม"],
    "ผลไม้": ["แอปเปิล", "กล้วย", "ส้ม", "มะม่วง", "แตงโม", "องุ่น", "สับปะรด", "ฝรั่ง"],
    "เดือน": ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
    "เลข 1–8": ["1", "2", "3", "4", "5", "6", "7", "8"],
    "การ์ตูนวัยเด็ก": ["โดราเอมอน", "ชินจัง", "โปเกมอน", "เบย์เบลด", "นารูโตะ", "ดิจิมอน", "วันพีซ", "โคนัน"],
    "เกมบนมือถือ": ["ROV", "Free Fire", "PUBG Mobile", "Roblox", "Minecraft", "Clash of Clans", "Brawl Stars", "Genshin Impact"],
    "อาชีพ": ["หมอ", "ครู", "วิศวกร", "ตำรวจ", "ทหาร", "นักบิน", "โปรแกรมเมอร์", "นักธุรกิจ", "ยาม", "นักกีฬา"],
    "วิชาเรียน": ["คณิตศาสตร์", "ฟิสิกส์", "เคมี", "ชีววิทยา", "ภาษาไทย", "ภาษาอังกฤษ", "สังคมศึกษา", "ประวัติศาสตร์", "พละ", "คอม"],
    "เครื่องเขียน": ["ปากกา", "ดินสอ", "ยางลบ", "ไม้บรรทัด", "สมุด", "ปากกาลบคำผิด", "กบเหลาดินสอ", "ปากกาเมจิก"],
    "น้ำดื่ม": ["สิงห์", "ช้าง", "คริสตัล", "มอนสเตอร์", "โค้ก", "เเฟนต้า", "เอส", "เเปปซี่", "เจเตอเรท", "m100"],
    "ของหวาน": ["เค้ก", "ไอศกรีม", "ช็อกโกแลต", "ขนมปัง", "บราวนี่", "วาฟเฟิล", "โดนัท", "พุดดิ้ง", "ครัวซองค์"],
    "ทีมฟุตบอลพรีเมียร์ลีก": ["Man Utd", "Man City", "Liverpool", "Arsenal", "Chelsea", "Tottenham", "Newcastle", "Aston Villa"],
    "หนังไทย": ["พี่มาก", "ฉลาดเกมส์โกง", "สุสานคนเป็น", "แฟนฉัน", "ชัตเตอร์", "ลัดดาแลนด์", "กวน มึน โฮ", "ATM เออรัก เออเร่อ", "friend zone", "ข้างบ้าน"],
    "อวัยวะ": ["หัวใจ", "สมอง", "ปอด", "ตับ", "ไต", "ตา", "มือ", "ขา"],
    "แบรนด์รถยนต์": ["Toyota", "Honda", "Mazda", "Nissan", "BMW", "Mercedes-Benz", "Ford", "Mitsubishi"],
    "กีฬา": ["ฟุตบอล", "บาสเกตบอล", "วอลเลย์บอล", "เทนนิส", "แบดมินตัน", "ว่ายน้ำ", "ปิงปอง", "มวย", "กอลฟ์"],
    "เครื่องดนตรี": ["กีตาร์", "เปียโน", "กลอง", "เบส", "ไวโอลิน", "ขลุ่ย", "แซกโซโฟน", "อูคูเลเล่", "ระนาดเอก"],
    "สัตว์ป่า": ["เสือ", "สิงโต", "ช้าง", "หมี", "หมาป่า", "จระเข้", "แรด", "กวาง"],
    "สัตว์เลี้ยง": ["สุนัข", "แมว", "กระต่าย", "หนูแฮมสเตอร์", "ปลา", "นก", "เต่า", "งู"],
    "แมลง": ["มด", "ยุง", "แมลงวัน", "ผีเสื้อ", "แมลงสาบ", "จิ้งหรีด", "ตั๊กแตน", "ด้วง", "เเมงมุง"],
    "ฮีโร่ DC": ["Batman", "Superman", "Wonder Woman", "The Flash", "Aquaman", "Green Lantern", "Cyborg", "Shazam"],
    "ฮีโร่ Marvel": ["Iron Man", "Captain America", "Thor", "Hulk", "Spider-Man", "Doctor Strange", "Black Panther", "Ant-Man"],
    "มหาวิทยาลัย": ["จุฬาฯ", "ธรรมศาสตร์", "เกษตรศาสตร์", "มหิดล", "มช.", "มข.", "ม.อ.", "มศว"],
    "นักฟุตบอล": ["Messi", "Ronaldo", "Neymar", "Mbappé", "Haaland", "De Bruyne", "Salah", "Son"]
};

// 2. ตัวแปรเก็บสถานะ (State)
let usedCategories = []; // เก็บหมวดหมู่ที่สุ่มไปแล้ว
let currentCategory = ""; 
let isRandomizingWord = false; // เช็กว่าตอนนี้ต้องสุ่ม "หมวด" หรือ "คำ"

const btn = document.getElementById('button');
const catDisplay = document.getElementById('category-display');
const instruction = document.getElementById('instruction');

// 3. ฟังก์ชันหลักในการทำงาน
btn.addEventListener('click', () => {
    if (!isRandomizingWord) {
        // --- ขั้นตอน: สุ่มหมวดหมู่ ---
        const categories = Object.keys(data).filter(cat => !usedCategories.includes(cat));

        if (categories.length === 0) {
            alert("สุ่มครบทุกหมวดหมู่แล้ว! จะเริ่มใหม่ให้นะครับ");
            usedCategories = [];
            return;
        }

        const randomIndex = Math.floor(Math.random() * categories.length);
        currentCategory = categories[randomIndex];
        usedCategories.push(currentCategory); // บันทึกว่าใช้ไปแล้ว ห้ามซ้ำ

        catDisplay.innerText = `หมวดหมู่: ${currentCategory}`;
        instruction.innerText = "ได้หมวดแล้ว กดปุ่มเพื่อสุ่มคำ!";
        btn.innerText = "สุ่มคำ";
        isRandomizingWord = true;

    } else {
        // --- ขั้นตอน: สุ่มคำในหมวดนั้น ---
        const words = data[currentCategory];
        const randomWordIndex = Math.floor(Math.random() * words.length);
        const selectedWord = words[randomWordIndex];

        instruction.innerText = `คำที่ได้คือ: ${selectedWord}`;
        btn.innerText = "สุ่มหมวดหมู่ใหม่";
        isRandomizingWord = false;
    }
});
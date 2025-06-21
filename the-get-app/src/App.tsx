import './App.css'

function App() {
  

  return (
    <>
     <div className="max-w-7xl mx-auto px-4">
    <nav className="flex justify-center space-x-4 [&>*]:w-42 [&>*]:text-center text-sm font-bold text-[#0f0f0f]">
      <a href="#subscriptions" className="hover:text-blue-600">Подписки</a>
      <a href="#products" className="hover:text-blue-600">Товары</a>
      <a href="#new" className="hover:text-blue-600">Новинки</a>
      <a href="#reviews" className="hover:text-blue-600">Отзывы</a>
      <a href="#about" className="hover:text-blue-600">О нас</a>
      <a href="#contacts" className="hover:text-blue-600">Контакты</a>
    </nav>

    <div className='text-[#0f0f0f] font-bold text-[250px] leading-none'>
      THE GET
    </div>

   <div className=" flex items-center justify-between mx-[95px] mt-[30px]">
  <div className="text-left font-bold leading-none">
    Ваш персональный<br />
    консъерж сервис<br />
    с 2022 года
  </div>
  <div className="text-left leading-none">
    Доставляем<br />
    всевозможные товары<br />
    из-за рубежа
  </div>
  <div className="bg-[#940000] text-white w-[450px] h-[40px] rounded cursor-pointer hover:bg-[#7a0000] flex items-center justify-center ml-[50px]">
  Перейти в каталог
</div>
</div>

  </div>
    
      
    </>
   
  )
}

export default App

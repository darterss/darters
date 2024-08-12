import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import bot_picture from './assets/bot_picture.jpg'

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <main className={'main'}>
                <img src={bot_picture} alt={'bot'} className={'bot-picture'}/>
                <br />
                <a target={'_blank'} rel="noreferrer" className="link-outline" data-text="https://t.me/gptdartersbot" href={'https://t.me/gptdartersbot'}>Chat GPT</a>
                <div className="description">
                    <h2>Telegram Бот: Ваш Персональный Помощник ChatGPT</h2>
                    <p>Представляем вашего нового цифрового помощника — Telegram бот, интегрированный с мощью ChatGPT.
                        Этот бот позволяет вам задавать любые вопросы и получать мгновенные, информативные и точные
                        ответы прямо в вашем любимом мессенджере.</p>

                    <h3>Что может наш бот?</h3>
                    <ul>
                        <li><strong>Ответы на любые вопросы:</strong> Задайте боту любой вопрос — от повседневных до
                            научных и профессиональных — и получите развернутый ответ в считанные секунды.
                        </li>
                        <li><strong>Интерактивное обучение:</strong> Используйте бота для обучения новым темам, получая
                            объяснения и примеры по запросу.
                        </li>
                        <li><strong>Помощь с домашними заданиями:</strong> Решите любые учебные задачи, будь то
                            математика, история или литература.
                        </li>
                        <li><strong>Создание контента:</strong> Получите помощь в написании статей, эссе, сценариев или
                            даже кода.
                        </li>
                        <li><strong>Развлечение и отдых:</strong> Насладитесь интересными фактами, шутками или просто
                            поболтайте на любую тему.
                        </li>
                    </ul>

                    <h3>Почему выбирают наш бот?</h3>
                    <ul>
                        <li><strong>Интеграция с ChatGPT:</strong> Использование одной из самых передовых моделей
                            искусственного интеллекта, обеспечивающей точные и разнообразные ответы.
                        </li>
                        <li><strong>Доступность 24/7:</strong> Бот всегда на связи и готов помочь в любое время суток.
                        </li>
                        <li><strong>Простота использования:</strong> Взаимодействуйте с ботом так же легко, как с любым
                            другом в Telegram.
                        </li>
                    </ul>

                    <h3>Как начать использовать?</h3>
                    <ul>
                        <li><strong>Просто перейдите в Telegram Бот:        </strong>
                            <a target={'_blank'} rel="noreferrer" className="link-outline" data-text="https://t.me/gptdartersbot" href={'https://t.me/gptdartersbot'}>Chat GPT</a>
                        </li>
                        <li><strong>Или найдите нашего бота:</strong> Воспользуйтесь поиском в Telegram и найдите нашего
                            бота по имени @GptDartersBot.
                        </li>
                        <li><strong>Начните диалог:</strong> Нажмите кнопку "Start" и начните задавать свои вопросы!
                        </li>
                    </ul>

                    <h3>Примеры использования</h3>
                    <ul>
                        <li><strong>"Как приготовить идеальный омлет?"</strong></li>
                        <li><strong>"Расскажи мне интересный факт о космосе."</strong></li>
                        <li><strong>"Помоги написать вступление для моего эссе по истории."</strong></li>
                        <li><strong>"Каковы последние новости в мире технологий?"</strong></li>
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default App;

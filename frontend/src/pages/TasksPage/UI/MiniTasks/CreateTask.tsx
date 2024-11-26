import React, { useState } from 'react';
import './CreateTask.css';
import TopBar from '../../TopBar/TopBar';
interface CreateTaskProps {
    onClose?: () => void;
}

const CreateTask: React.FC<CreateTaskProps> = () => {
    const [formData, setFormData] = useState({
        title: '',
        url: '',
        description: '',
        executorRequirements: '',
        category: '',
        cryptocurrency: '',
        reward: '',
        repeatExecution: '',
        maxCheckTime: '',
        advertisingBudget: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь будет логика отправки данных на сервер
        console.log(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="create-task-page">
            <TopBar pageName="create-task" />
            <div className="create-task-container">
                <div className="create-task-header">
                    <h2>Перевести на английский договор</h2>
                    <p className="task-description">
                        На EVO Project есть много желающих выполнять несложные задания за небольшую плату. Насколько востребованным и интересным будет ваше задание, зависит только от вас. Не скупитесь на оплату труда исполнителям.
                    </p>
                    <p className="reward-info">
                        Минимальное вознаграждение за одно выполнение задания — 0,01USDT, 0,002Ton.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="create-task-form">
                    <input
                        type="text"
                        name="title"
                        placeholder="Заголовок задания*"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="url"
                        name="url"
                        placeholder="URL-Ссылка*"
                        value={formData.url}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="description"
                        placeholder="Описание задания"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <textarea
                        name="executorRequirements"
                        placeholder="Что исполнитель должен написать в отчёте?*"
                        value={formData.executorRequirements}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Категория задания</option>
                        {/* Добавьте необходимые опции */}
                    </select>

                    <select
                        name="cryptocurrency"
                        value={formData.cryptocurrency}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Выберите криптовалюту</option>
                        <option value="USDT">USDT</option>
                        <option value="TON">TON</option>
                    </select>

                    <input
                        type="number"
                        name="reward"
                        placeholder="Вознаграждение исполнителю*"
                        value={formData.reward}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="repeatExecution"
                        placeholder="Повторное выполнение*"
                        value={formData.repeatExecution}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="maxCheckTime"
                        placeholder="Максимальный срок проверки отчётов*"
                        value={formData.maxCheckTime}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="advertisingBudget"
                        placeholder="Рекламный бюджет*"
                        value={formData.advertisingBudget}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="publish-button">
                        Опубликовать
                    </button>
                </form>
            </div>
        </div>

    );
};

export default CreateTask;
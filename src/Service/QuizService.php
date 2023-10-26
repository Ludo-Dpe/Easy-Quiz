<?php
namespace App\Service;

use App\Entity\Quiz;
use App\Entity\Answer;
use App\Entity\Question;
use App\Repository\QuizRepository;
use Doctrine\ORM\EntityManagerInterface;

class QuizService
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly QuizRepository $quizRepo
    )
    {

    }

    public function add(array $quizData): Quiz
    {
        $quiz = new Quiz($quizData['title']);

        foreach ($quizData['questions'] as $questionData) {
            $question = new Question($questionData['question']);
            $correctAnswer = $questionData['answer'];

            $this->em->persist($question);

            foreach ($questionData['answers'] as $key => $answerData) {
                $answer = new Answer($answerData);
                $answer->setIsCorrect($key === array_search($correctAnswer, $questionData['answers']));
                $question->addAnswer($answer);
                $this->em->persist($answer);
            }

            $quiz->addQuestion($question);
        }
        $this->quizRepo->save($quiz, true);
        
        return $quiz;
    }
}